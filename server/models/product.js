const Sequelize = require('sequelize');
const sequelize = require('../config/db.connect.js');

const product = sequelize.define('product', {
  productId: {
    type: Sequelize.BIGINT(11),
    primaryKey: true,
    allowNull: false,
    unique: true,
    autoIncrement: true
  },
  productName: Sequelize.STRING(255),
  productIntro: Sequelize.STRING(255),
  productPrice: Sequelize.STRING(255),
  productAmount: Sequelize.STRING(255),
  productAbundance: Sequelize.STRING(255),
  productSeason: Sequelize.STRING(255),
  productApplicant: Sequelize.STRING(255),
  productImgId: Sequelize.STRING(255),
  productRelatedImg: Sequelize.STRING(255),
  brandId: Sequelize.BIGINT(11),
  typeId: Sequelize.BIGINT(11),
}, {
  timestamps: false
});

module.exports = product;
