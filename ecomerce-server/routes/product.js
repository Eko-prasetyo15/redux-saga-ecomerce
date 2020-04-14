var express = require('express');
var router = express.Router();
// var models = require('../models/index');
const productController = require('../server/controllers').product;

/* GET users listing. */
router.get('/', productController.list);
router.post('/', productController.add);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);



module.exports = router;