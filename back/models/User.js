const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('user', {
  _id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  pseudo: { type: Sequelize.STRING, allowNull: false, unique: true },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { isEmail: true },
    unique: true,
  },
  password: { type: Sequelize.STRING, allowNull: false },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

module.exports = User;
