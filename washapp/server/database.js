const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('washapp', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

module.exports = {
  sequelize,
  testConnection
};