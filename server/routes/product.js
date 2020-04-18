var express = require('express');
var router = express.Router();
var models = require('../models/index');

// get all todos
router.get('/', function(req, res) {
  models.product.findAll({}).then(function(product) {
    res.json(product);
  });
});

router.get("/:id", function (req, res, next) {
  models.product.findByPk(req.params.id)
  .then(function (product) {
    res.json(product);
  });
});

router.post("/", function (req, res) {
  models.product
    .create({
      title: req.body.title,
      rate: req.body.rate,
      description: req.body.description,
      price: req.body.price,
      brand: req.body.brand,
      detailproduct: req.body.detailproduct,
    })
    .then(function (product) {
      res.json(product);
    });
});

router.delete("/:id", function (req, res, next) {
  models.product.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function (product) {
    res.json(product);
  });
});

module.exports = router;
