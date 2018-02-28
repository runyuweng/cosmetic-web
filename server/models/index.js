const User = require('./user')
const Product = require('./product')
const Brand = require('./brand')
const Type = require('./type')
const Sort = require('./sort')
const Img = require('./img')

Product.belongsTo(Brand, { foreignKey: 'brandId', targetKey: 'brandId' });
Product.belongsTo(Img, { foreignKey: 'productImgId', targetKey: 'imgId' });

module.exports = {
  User,
  Product,
  Brand,
  Type,
  Sort,
  Img
}