const Post = require('../models/Post');
const fs = require('fs');

exports.createPost = (req, res, next) => {
  // const postObject = JSON.parse(req.body.post);

  // delete postObject._id;

  const post = Post.create({
    text: req.body.text,
    imageUrl: req.body.imageUrl,
    userId: req.body.userId,
    // likes: 0,
    // dislikes: 0,
    // usersLiked: [],
    // // usersDisliked: [],
    // imageUrl: `${req.protocol}://${req.get('host')}/images/${
    //   req.file.filename
    // }`,
  })
    // post
    //   .save()
    .then(() => res.status(201).json({ message: 'Post enregistré !' }))
    .catch((error) => res.status(400).json({ error }));
};

exports.updatePost = (req, res, next) => {
  if (req.file) {
    Post.findOne({ _id: req.params.id }).then((post) => {
      const filename = post.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, (err) => {
        if (err) throw err;
        console.log('Image was deleted');
      });
    });
  }
  const postObject = req.file
    ? {
        ...JSON.parse(req.body.post),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };

  Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Post modifié !' }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deletePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
    .then((post) => {
      const filename = post.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Post.findOne({ _id: req.params.id }).then((post) => {
          if (!post) {
            res.status(404).json({
              error: new Error('Post inexistant'),
            });
          }
          if (post.userId !== req.auth.userId) {
            res.status(400).json({
              error: new Error('Unauthorized request!'),
            });
          }
          Post.deleteOne({ _id: req.params.id })
            .then(() => {
              res.status(200).json({
                message: 'Post supprimé!',
              });
            })
            .catch((error) => {
              res.status(400).json({
                error: error,
              });
            });
        });
      });
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.getOnePost = (req, res) => {
  Post.findOne({ where: { _id: req.params.id } })
    .then((post) => res.status(200).json(post))
    .catch((error) => res.status(404).json({ error }));
};

exports.getAllPosts = (req, res) => {
  Post.findAll()
    .then((posts) => res.status(200).json(posts))
    .catch((error) => res.status(400).json({ error }));
};

exports.like = (req, res) => {
  Post.findOne({ _id: req.params.id })
    .then((post) => {
      try {
        post.usersLiked = post.usersLiked.filter(
          (userId) => userId !== req.auth.userId
        );
        post.usersDisliked = post.usersDisliked.filter(
          (userId) => userId !== req.auth.userId
        );

        if (req.body.like === 1) {
          post.usersLiked.push(req.auth.userId);
        } else if (req.body.like === -1) {
          post.usersDisliked.push(req.auth.userId);
        }
        post.likes = post.usersLiked.length;
        post.dislikes = post.usersDisliked.length;
      } catch (err) {
        console.log(err);
      }

      Post.updateOne({ _id: req.params.id }, post)
        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
        .catch((error) => res.status(400).json({ error }));
    })
    .then(() => {
      res.status(200).json({ message: 'like succeeded' });
    })
    .catch((error) => {
      res.status(400).json({ error: error });
    });
};
