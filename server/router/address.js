const express = require('express')
const Sequelize = require('sequelize')
const { Address, User } = require('../models')

const router = express.Router()

router.get('/list/:userId', (req, res) => {
  const { userId } = req.params;
  console.log('userId', userId)

  Address.findAll({
    where: {
      userId
    },
    include: [{
      model: User,
      where: { userId: Sequelize.col('user.userId') }
    }]
  }).then((d) => {
    res.send({
      code: 0,
      data: JSON.parse(JSON.stringify(d))
    })
  }).catch((err) => {
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
