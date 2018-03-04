const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const {
    authorization = null,
  } = req.headers

  console.log('path', req.path)

  const skipPaths = [
    /^\/product/,
    /^\/static/,
    /^\/auth/,
    /^\/$/
  ];

  if (skipPaths.some(p => p.test(req.path))) return next();

  if (!authorization) {
    res.send({
      code: 2,
      msg: '非法请求'
    })
    return
  }

  // 验证管理员权限
  if (authorization) {
    try {
      const decoded = jwt.verify(authorization, 'secret');
      console.log('decoded', decoded)
    } catch (err) {
      console.log(err)
      res.send({
        code: 2
      })
    }
  }
  next();
}