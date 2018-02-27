const express = require('express')
const Sequelize = require('sequelize')
const { Product, Type } = require('../models')

const router = express.Router()

router.get('/type', (req, res) => {
  console.log('get type')

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

module.exports = router
