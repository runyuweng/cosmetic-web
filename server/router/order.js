const express = require('express')
const Sequelize = require('sequelize')
const { Order, Address, Op } = require('../models')

const router = express.Router()

// 获取订单列表
router.get('/list/:userId', (req, res) => {
  // 从请求中获取userId
  const { userId } = req.params;

  // 执行查询语句
  Order.findAll({
    where: {
      userId
    },
    // 链接Op表进行联合查询
    include: [{
      model: Op,
      where: { orderId: Sequelize.col('op.orderId') }
    }]
  }).then((d) => {
    // 查询成功返回指定结构的对象
    res.send({
      code: 0,
      data: JSON.parse(JSON.stringify(d))
    })
  }).catch((err) => {
    // 打印错误代码
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
    },{
      model: Address,
      where: { addressId: Sequelize.col('address.addressId') }
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
