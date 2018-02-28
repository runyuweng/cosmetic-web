const Sequelize = require('sequelize');
const sequelize = require('../config/db.connect.js');

const brand = sequelize.define('brand', {
  brandId: {
    type: Sequelize.BIGINT(11),
    primaryKey: true,
    allowNull: false,
    unique: true,
    autoIncrement: true
  },
  brandName: Sequelize.STRING(255),
  brandIntro: Sequelize.STRING(255),
  brandCountry: Sequelize.STRING(255),
  brandUrl: Sequelize.STRING(255),
  brandIsVerified: Sequelize.BIGINT(11),
}, {
  timestamps: false
});

module.exports = brand;
