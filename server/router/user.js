const express = require('express')
const Sequelize = require('sequelize')
const { User } = require('../models')

const router = express.Router()

// 获取用户信息
router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  
  // 执行查询操作
  User.findAll({
    attributes: ['userId', 'userName','userMail', 'userTel', 'userBirth'],
    where: {
      userId
    }
  }).then((d) => {
    // 返回指定结构的对象
    res.send({
      code: 0,
      data: JSON.parse(JSON.stringify(d[0]))
    })
  }).catch((err) => {
    // 操作失败打印错误信息
    console.log(err);
  });
});

router.post('/', (req, res) => {
  const { userId, userName, userMail, userTel, userBirth } = req.body;
  console.log('userId', userId, req.body)

  User.update({
    userName,
    userMail,
    userTel,
    userBirth
  }, {
    where: { userId },
    plain: true
  }).then((d) => {
    res.send({
      code: 0,
      data: req.body
    })
  }).catch((err) => {
    console.log(err);
  });
  // User.findAll({
  //   attributes: ['userId', 'userName','userMail', 'userTel', 'userBirth'],
  //   where: {
  //     userId
  //   }
  // }).then((d) => {
  //   res.send({
  //     code: 0,
  //     data: JSON.parse(JSON.stringify(d[0]))
  //   })
  // }).catch((err) => {
  //   console.log(err);
  // });
});

module.exports = router
