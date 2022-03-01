const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Post = require('../models/Post');
require('dotenv').config();
const accessToken = process.env.ACCESS_TOKEN;

exports.signup = (req, res, next) => {
  User.findOne({
    where: { email: req.body.email },
  })
    .then((user) => {
      if (user) {
        res.status(400).json({ message: 'Utilisateur déjà enregistré' });
      } else {
        bcrypt
          .hash(req.body.password, 10)
          .then((hash) => {
            const user = User.create({
              pseudo: req.body.pseudo,
              email: req.body.email,
              password: hash,
            })
              .then((user) =>
                res.status(201).json({
                  userId: user._id,
                  token: jwt.sign({ userId: user._id }, `${accessToken}`, {
                    expiresIn: '24h',
                  }),
                })
              )
              .catch((error) => res.status(400).json({ error }));
          })
          .catch((error) => res.status(500).json({ error }));
      }
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  User.findOne({
    where: { email: req.body.email },
  })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ message: 'Utilisateur non trouvé' });
      }
      bcrypt.compare(req.body.password, user.password).then((valid) => {
        if (!valid) {
          return res.status(401).json({ message: 'Mot de passe incorrect' });
        }
        return res.status(200).json({
          userId: user._id,
          token: jwt.sign({ userId: user._id }, `${accessToken}`, {
            expiresIn: '24h',
          }),
        });
      });
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.delete = (req, res, next) => {
  User.findOne({
    where: { _id: req.body.userId },
  })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ message: 'Utilisateur non trouvé' });
      }
      User.destroy({ where: { _id: req.body.userId } })
        .then(() => {
          res.status(200).json({
            message: 'Utilisateur supprimé!',
          });
        })
        .catch((error) => {
          res.status(400).json({
            error,
          });
        });
    })
    .catch((error) => res.status(500).json({ error }));
};
