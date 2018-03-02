const express = require('express')
const Sequelize = require('sequelize')
const { Address, User } = require('../models')

const router = express.Router()

router.get('/list/:userId', (req, res) => {
  const { userId } = req.params;
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

router.get('/item/:addressId', (req, res) => {
  const { addressId } = req.params;
  Address.findAll({
    where: {
      addressId
    }
  }).then((d) => {
    res.send({
      code: 0,
      data: JSON.parse(JSON.stringify(d[0]))
    })
  }).catch((err) => {
    console.log(err);
  });
});

router.post('/edit', (req, res) => {
  const { addressCode, addressDetail, addressId, addressProvince, addressTel, addressUserName } = req.body;
  Address.update({
    addressCode,
    addressDetail,
    addressProvince,
    addressTel,
    addressUserName
  }, {
    where: { addressId },
    plain: true
  }).then((d) => {
    res.send({
      code: 0,
      data: req.body
    })
  }).catch((err) => {
    console.log(err);
  });
});

router.post('/add', (req, res) => {
  const { addressCode, addressDetail, addressProvince, addressTel, addressUserName, userId } = req.body;
  Address.upsert({
    userId,
    addressCode,
    addressDetail,
    addressProvince,
    addressTel,
    addressUserName
  }).then((d) => {
    res.send({
      code: 0,
      data: {}
    })
  }).catch((err) => {
    console.log(err);
  });
});

module.exports = router
