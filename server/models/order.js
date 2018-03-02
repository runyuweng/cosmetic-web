const Sequelize = require('sequelize');
const sequelize = require('../config/db.connect.js');

const order = sequelize.define('order', {
  orderId: {
    type: Sequelize.STRING(255),
    primaryKey: true,
    allowNull: false,
    unique: true,
    autoIncrement: true
  },
  userId: Sequelize.BIGINT(11),
  addressId: Sequelize.BIGINT(11),
  orderDispatchTime: Sequelize.STRING(255),
  orderCreateTime: Sequelize.STRING(255)
}, {
  timestamps: false
});

module.exports = order;
