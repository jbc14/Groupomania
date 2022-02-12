const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('groupomania', 'root', 'jbc143318', {
  host: 'localhost',
  dialect: 'mysql',
});

try {
  sequelize.authenticate();
  console.log('Connexion à la base de données réussie !');
} catch (error) {
  console.error('Impossible de se connecter à la base de données:', error);
}

module.exports = sequelize;
