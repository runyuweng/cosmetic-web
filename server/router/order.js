const express = require('express')
const Sequelize = require('sequelize')
const { Order, User, Op } = require('../models')

const router = express.Router()

router.get('/list/:userId', (req, res) => {
  const { userId } = req.params;
  Order.findAll({
    where: {
      userId
    },
    include: [{
      model: Op,
      where: { orderId: Sequelize.col('op.orderId') }
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

router.get('/detail/:orderId', (req, res) => {
  const { orderId } = req.params;
  Order.findAll({
    where: {
      orderId
    },
    include: [{
      model: Op,
      where: { orderId: Sequelize.col('op.orderId') }
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

router.post('/create', (req, res) => {
  const { products, userId, addressId } = req.body;
  console.log(req.body)
  const orderId = Date.parse(new Date()) + userId
  const records = products.map(d => ({
    orderId,
    productId: d.productId,
    productNum: d.productNum,
    productPrice: d.productPrice,
    productName: d.productName
  }))
  Order.upsert({
    orderId,
    orderCreateTime: Date.parse(new Date()),
    userId,
    addressId
  }).then((d) => {
    if (d) {
      Op.bulkCreate(records,{
        plain: true
      }).then((d) => {
        res.send({
          code: 0,
          data: {}
        })
      })
    } else {
      res.send({
        code: 1,
        data: {}
      })
    }
  }).catch((err) => {
    console.log(err);
  });
});

module.exports = router
