const express = require('express')
const Sequelize = require('sequelize')
const jwt = require('jsonwebtoken');

// const { User } = require('../models')

const router = express.Router()
const { User } = require('../models')

router.post('/login', (req, res) => {
  const { userMail, userPwd } = req.body;
  console.log('userMail', userMail, userPwd)

  User.findAll({
    attributes: ['userId', 'userPwd'],
    where: {
      userMail
    }
  }).then(d => JSON.parse(JSON.stringify(d))).then((d) => {
    if (d.length === 1) {
      if (d[0].userPwd === String(userPwd)) {
        jwt.sign(
          { exp: Math.floor(Date.now() / 1000) + (7 * 24 * 60 * 60) },
          'secret',
          (err, token) => {
            if (err) {
              res.send({
                code: 2,
                msg: '登陆失败'
              })
              return
            }
            res.setHeader('authorization', token)
            res.send({
              code: 0,
              data: {
                userId: d[0].userId
              },
              msg: '登陆成功'
            })
          }
        )
        return
      }
    }
  }).catch((err) => {
    console.log(err);
  });
});

router.post('/register', (req, res) => {
  const { userMail, userPwd } = req.body;
  console.log('userMail', userMail, userPwd)

  User.findAll({
    where: {
      userMail
    }
  }).then((d) => {
    if (d.length > 0) {
      res.send({
        code: 1,
        msg: '邮箱已注册'
      })
    } else {
      User.upsert({
        userMail,
        userPwd
      }).then((d) => {
        res.send({
          code: 0,
          msg: '注册成功'
        })
      }).catch((err) => {
        console.log(err);
      });
    }
  }).catch((err) => {
    console.log(err);
  });
});

module.exports = router
