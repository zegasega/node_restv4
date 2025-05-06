const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('ornekdb', 'root', 'root123', {
  host: 'localhost',
  dialect: 'mariadb',
  port: 3306,
});

module.exports = sequelize;


module.exports = sequelize;
