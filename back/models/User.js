const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const User = sequelize.define('user', {
  _id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  pseudo: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

User.sync();

module.exports = User;
