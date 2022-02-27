const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
  }
);

try {
  sequelize.authenticate();
  console.log('Connexion à la base de données réussie !');
  sequelize.sync();
} catch (error) {
  console.error('Impossible de se connecter à la base de données:', error);
}

module.exports = sequelize;
