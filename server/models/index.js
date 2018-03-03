const User = require('./user')
const Product = require('./product')
const Brand = require('./brand')
const Type = require('./type')
const Sort = require('./sort')
const Img = require('./img')
const Address = require('./address')
const Op = require('./op')
const Order = require('./order')

Product.belongsTo(Brand, { foreignKey: 'brandId', targetKey: 'brandId' });
Product.belongsTo(Img, { foreignKey: 'productImgId', targetKey: 'imgId' });
Address.belongsTo(User, { foreignKey: 'userId', targetKey: 'userId' });
// Op.belongsTo(Order, { foreignKey: 'orderId', targetKey: 'orderId' });
Order.belongsTo(Op, { foreignKey: 'orderId', targetKey: 'orderId' });
Order.belongsTo(Address, { foreignKey: 'addressId', targetKey: 'addressId' });

module.exports = {
  User,
  Product,
  Brand,
  Type,
  Sort,
  Img,
  Address,
  Op,
  Order
}
