const path = require('path')
const watch = require('../utils/watch');
let user = require('./user')
let product = require('./product')
let auth = require('./auth')
let address = require('./address')
let order = require('./order')

const staticDir = path.join(__dirname, '../../static')
const buildDir = path.join(__dirname, '../../build')

module.exports = (app) => {
  app.get('/', (req, res) => {
    const filePath = `${staticDir}/index.html`;
    res.sendFile(filePath);
  });

  // 打包文件
  app.get('/build/*', (req, res) => {
    const filePath = `${buildDir}${req.url.split('/build')[1]}`;
    res.sendFile(filePath);
  });

  // 静态文件
  app.get('/static/*', (req, res) => {
    const filePath = `${staticDir}${req.url.split('/static')[1]}`;
    res.sendFile(filePath);
  });

  app.use('/user', (req, res, next) => user(req, res, next))
  app.use('/product', (req, res, next) => product(req, res, next))
  app.use('/auth', (req, res, next) => auth(req, res, next))
  app.use('/address', (req, res, next) => address(req, res, next))
  app.use('/order', (req, res, next) => order(req, res, next))

  if (process.env.NODE_ENV === 'development') {
    watch([
      require.resolve('./user'),
      require.resolve('./product'),
      require.resolve('./auth'),
      require.resolve('./address'),
      require.resolve('./order'),
    ], () => {
      user = require('./user')
      product = require('./product')
      auth = require('./auth')
      address = require('./address')
      order = require('./order')
    })
  }
}
