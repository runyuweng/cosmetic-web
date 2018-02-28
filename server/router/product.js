const express = require('express')
const Sequelize = require('sequelize')
const { Product, Type, Sort, Brand } = require('../models')

const router = express.Router()

router.get('/type', (req, res) => {
  Type.findAll({
  }).then((d) => {
    res.send({
      code: 0,
      data: JSON.parse(JSON.stringify(d))
    })
  }).catch((err) => {
    console.log(err);
  });
});

router.get('/sort/:typeId', (req, res) => {
  console.log(req.query, req.params, req.body)
  const { typeId } = req.params;
  Sort.findAll({
    where: {
      typeId
    },
  }).then((d) => {
    res.send({
      code: 0,
      data: JSON.parse(JSON.stringify(d))
    })
  }).catch((err) => {
    console.log(err);
  });
});

router.get('/brandList/:typeId', (req, res) => {
  console.log(req.query, req.params, req.body)
  const { typeId } = req.params;
  Brand.findAll({
    where: {
      typeId
    },
  }).then((d) => {
    res.send({
      code: 0,
      data: JSON.parse(JSON.stringify(d))
    })
  }).catch((err) => {
    console.log(err);
  });
});

module.exports = router
