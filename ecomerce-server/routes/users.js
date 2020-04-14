var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/users', function(req, res) {
  models.Product.create({
    title: req.body.title,
    rate: req.body.rate,
    description: req.body.description,
    price: req.body.price,
    brand: req.body.brand,
    detail: req.body.detail

  }).then(function(user) {
    res.json(user);
  });
});

module.exports = router;
