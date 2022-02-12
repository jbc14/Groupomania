const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const Post = sequelize.define('post', {
  _id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  text: { type: Sequelize.STRING, allowNull: false },
  imageUrl: { type: Sequelize.STRING, allowNull: true },
  userId: { type: Sequelize.INTEGER, allowNull: false },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});


module.exports = Post;
