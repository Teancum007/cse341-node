const express = require('express');
const router = express.Router();

const mainControl = require('../controllers/primaryControl');
const authController = require('../controllers/auth');

const fs = require('fs');
const jdata = require('../models/products');

router.get('/', mainControl.loadPlanets);

router.get('/addproduct', mainControl.addProduct);

router.get('/products', mainControl.loadProduct);

router.get('/editproduct/:productId', mainControl.getEditProduct);

router.post('/editproduct', mainControl.postEditProduct);

router.post('/deleteproduct', mainControl.deleteProduct);

router.get('/cart', mainControl.getCart);

router.post('/cart', mainControl.postCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);

router.post('/create-order', shopController.postOrder);

router.get('/orders', shopController.getOrders);

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post('/login', authController.postLogin);

router.post('/signup', authController.postSignup);

router.post('/logout', authController.postLogout);

module.exports = router;