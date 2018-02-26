const path = require('path')
const watch = require('../utils/watch');
let user = require('./user')
let product = require('./product')
let auth = require('./auth')

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

  if (process.env.NODE_ENV === 'development') {
    watch([
      require.resolve('./user'),
      require.resolve('./product'),
      require.resolve('./auth'),
    ], () => {
      user = require('./user')
      product = require('./product')
      auth = require('./auth')
    })
  }
}
