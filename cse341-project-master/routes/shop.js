const express = require('express');
const router = express.Router();

const mainControl = require('../controllers/primaryControl');
const authController = require('../controllers/auth');
const isAuth = require('../models/isAuth');

const fs = require('fs');
const jdata = require('../models/products');

router.get('/', mainControl.loadPlanets);

router.get('/addproduct', isAuth, mainControl.addProduct);

router.get('/products', mainControl.loadProduct);

router.get('/editproduct/:productId', isAuth, mainControl.getEditProduct);

router.post('/editproduct', isAuth, mainControl.postEditProduct);

router.post('/deleteproduct', isAuth, mainControl.deleteProduct);

router.get('/cart', isAuth, mainControl.getCart);

router.post('/cart', isAuth, mainControl.postCart);

router.post('/cart-delete-item', isAuth, shopController.postCartDeleteProduct);

router.post('/create-order', isAuth, shopController.postOrder);

router.get('/orders', isAuth, shopController.getOrders);

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post('/login', authController.postLogin);

router.post('/signup', authController.postSignup);

router.post('/logout', authController.postLogout);

module.exports = router;