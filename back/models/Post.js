const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Post = sequelize.define('post', {
  _id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  text: { type: Sequelize.STRING, allowNull: false },
  imageUrl: { type: Sequelize.STRING, allowNull: true },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

Post.belongsTo(User, {
  onDelete: 'cascade',
  as: 'createur',
  foreignKey: {
    allowNull: false,
  },
});

Post.findAll({
  include: [],
});

module.exports = Post;
