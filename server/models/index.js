const User = require('./user')

// Company.belongsTo(User, { foreignKey: 'companyOwnerId', targetKey: 'userId' });

module.exports = {
  User,
}