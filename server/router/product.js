const express = require('express')
const Sequelize = require('sequelize')
const { Product, Type, Sort, Brand, Img } = require('../models')

const router = express.Router()

// 获取类型
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

// 获取详细分类
router.get('/sort/:typeId', (req, res) => {
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

router.post('/list', (req, res) => {
  const { typeId, brandIds, sortIds, page } = req.body;
  const query = {
    where: { typeId },
  };
  if (sortIds.length > 0) {
    query.where.sortId = sortIds.map(d => String(d))
  }
  if (brandIds.length > 0) {
    query.where.brandId = brandIds.map(d => String(d))
  }
  const offset = (page - 1) * 10;
  const limit = page * 10;
  Product.findAndCountAll({
    ...query,
    offset,
    limit,
    include: [{
      model: Img,
      where: { productImgId: Sequelize.col('img.imgId') }
    }]
  }).then((d) => {
    const result = JSON.parse(JSON.stringify(d))
    res.send({
      code: 0,
      data: result.rows,
      count: result.count
    })
  }).catch((err) => {
    console.log(err);
  });
});

// 获取商品详情
router.get('/section/:typeId', (req, res) => {
  const { typeId } = req.params;
  Product.findAll({
    where: {
      typeId
    },
    offset: 0,
    limit: 6,
    include: [{
      model: Img,
      where: { productImgId: Sequelize.col('img.imgId') }
    }]
  }).then((d) => {
    const result = JSON.parse(JSON.stringify(d));
    res.send({
      code: 0,
      data: result
    })
  }).catch((err) => {
    console.log(err);
  });
});

// 获取商品详情
router.get('/:productId', (req, res) => {
  const { productId } = req.params;
  Product.findAll({
    where: {
      productId
    },
    include: [{
      model: Brand,
      where: { brandId: Sequelize.col('brand.brandId') }
    }, {
      model: Img,
      where: { productImgId: Sequelize.col('img.imgId') }
    }]
  }).then((d) => {
    const result = JSON.parse(JSON.stringify(d))[0];
    const imgIds = result.productRelatedImg.split('-').map(d => ({
      imgId: parseInt(d, 10)
    }))
    Img.findAll({
      where: {
        [Sequelize.Op.or]: imgIds
      }
    }).then((d) => {
      result.productRelatedImg = JSON.parse(JSON.stringify(d))
      res.send({
        code: 0,
        data: result
      })
    })
  }).catch((err) => {
    console.log(err);
  });
});

module.exports = router
