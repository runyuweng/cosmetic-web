const Sequelize = require('sequelize');
const sequelize = require('../config/db.connect.js');

const op = sequelize.define('op', {
  opId: {
    type: Sequelize.BIGINT(11),
    primaryKey: true,
    allowNull: false,
    unique: true,
    autoIncrement: true
  },
  orderId: Sequelize.STRING(255),
  productId: Sequelize.BIGINT(11),
  productNum: Sequelize.STRING(255),
  productPrice: Sequelize.STRING(255),
  productName: Sequelize.STRING(255),
}, {
  timestamps: false
});

module.exports = op;
