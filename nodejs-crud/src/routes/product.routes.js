const express = require('express');
const { AddProduct  } = require('../controllers/product.controllers.js');
const router = express.Router();

router.post('/add',AddProduct)

module.exports = router;