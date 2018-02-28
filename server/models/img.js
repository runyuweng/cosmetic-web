const Sequelize = require('sequelize');
const sequelize = require('../config/db.connect.js');

const img = sequelize.define('img', {
  imgId: {
    type: Sequelize.BIGINT(11),
    primaryKey: true,
    allowNull: false,
    unique: true,
    autoIncrement: true
  },
  imgName: Sequelize.STRING(255),
  imgUrl: Sequelize.STRING(255)
}, {
  timestamps: false
});

module.exports = img;
