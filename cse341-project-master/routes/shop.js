const express = require('express');
const router = express.Router();

const mainControl = require('../controllers/primaryControl');

const fs = require('fs');
const jdata = require('../models/products');

router.get('/', mainControl.loadPlanets);

router.get('/addproduct', mainControl.addProduct);

router.get('/products', mainControl.loadProduct);

router.get('/editproduct/:productId', mainControl.getEditProduct);

router.post('/editproduct', mainControl.postEditProduct);

router.post('/deleteproduct', mainControl.deleteProduct);

module.exports = router;