const jwt = require('jsonwebtoken');
require('dotenv').config();
const accessToken = process.env.ACCESS_TOKEN;

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, `${accessToken}`);
    const userId = decodedToken.userId;
    req.auth = { userId };
    if (req.body.userId && req.body.userId !== userId) {
      throw 'User Id non valable';
    } else {
      next();
    }
  } catch (error) {
    res.status(403).json({ message: 'Non autorisé' });
  }
};
