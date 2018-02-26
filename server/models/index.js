const User = require('./user')
const Product = require('./product')
const Brand = require('./brand')
const Type = require('./type')

// Company.belongsTo(User, { foreignKey: 'companyOwnerId', targetKey: 'userId' });

module.exports = {
  User,
  Product,
  Brand,
  Type
}