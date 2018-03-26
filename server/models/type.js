const Sequelize = require('sequelize');
const sequelize = require('../config/db.connect.js');

const type = sequelize.define('type', {
  typeId: {
    type: Sequelize.BIGINT(11),
    primaryKey: true,
    allowNull: false,
    unique: true,
    autoIncrement: true
  },
  typeName: Sequelize.STRING(255),
  typeIntro: Sequelize.STRING(255),
  brandList: Sequelize.STRING(255),
}, {
  timestamps: false
});

module.exports = type;
