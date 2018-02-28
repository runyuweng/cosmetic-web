const Sequelize = require('sequelize');
const sequelize = require('../config/db.connect.js');

const sort = sequelize.define('sort', {
  sortId: {
    type: Sequelize.BIGINT(11),
    primaryKey: true,
    allowNull: false,
    unique: true,
    autoIncrement: true
  },
  sortName: Sequelize.STRING(255),
  sortIntro: Sequelize.STRING(255),
  typeId: Sequelize.BIGINT(11),
}, {
  timestamps: false
});

module.exports = sort;
