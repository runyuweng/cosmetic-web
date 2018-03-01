const Sequelize = require('sequelize');
const sequelize = require('../config/db.connect.js');

const address = sequelize.define('address', {
  addressId: {
    type: Sequelize.BIGINT(11),
    primaryKey: true,
    allowNull: false,
    unique: true,
    autoIncrement: true
  },
  addressTel: Sequelize.STRING(255),
  addressProvince: Sequelize.STRING(255),
  addressCity: Sequelize.STRING(255),
  addressDetail: Sequelize.STRING(255),
  userId: Sequelize.BIGINT(11),
}, {
  timestamps: false
});

module.exports = address;
