const jwt = require('jsonwebtoken');

// 后端验证用户是否登陆的中间件
module.exports = (req, res, next) => {
  const {
    authorization = null,
  } = req.headers

  // 地址白名单
  const skipPaths = [
    /^\/product/,
    /^\/static/,
    /^\/auth/,
    /^\/$/
  ];

  if (skipPaths.some(p => p.test(req.path))) return next();

  // 请求头中未携带authorization
  if (!authorization) {
    res.send({
      code: 2,
      msg: '非法请求'
    })
    return
  }

  // 验证管理员权限
  if (authorization) {
    // 如果jwt.verify没有catch到err则说明验证通过
    try {
      const decoded = jwt.verify(authorization, 'secret');
    } catch (err) {
      // 验证未通过返回错误码
      console.log(err)
      res.send({
        code: 2
      })
    }
  }
  next();
}