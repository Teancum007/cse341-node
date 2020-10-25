const express = require('express');
const router = express.Router();
const { check, body } = require('express-validator/check');

const mainControl = require('../controllers/primaryControl');
const authController = require('../controllers/auth');
const isAuth = require('../models/isAuth');
const User = require('../models/user');

const fs = require('fs');
const jdata = require('../models/products');

router.get('/', mainControl.loadPlanets);

router.get('/addproduct', isAuth, mainControl.addProduct);

router.get('/products', mainControl.loadProduct);

router.get('/editproduct/:productId', isAuth, mainControl.getEditProduct);

router.post('/editproduct', isAuth, 
    [
        body('title').isAlphanumeric(),
        body('price').isFloat()
    ], 
    mainControl.postEditProduct);

router.post('/deleteproduct', isAuth, mainControl.deleteProduct);

router.get('/cart', isAuth, mainControl.getCart);

router.post('/cart', isAuth, mainControl.postCart);

router.post('/cart-delete-item', isAuth, mainControl.postCartDeleteProduct);

router.post('/create-order', isAuth, mainControl.postOrder);

router.get('/orders', isAuth, mainControl.getOrders);

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post('/login', 
    [
        body('email').isEmail().withMessage('No such e-mail on record.'),
        body('password', 'Invalid password').isLength({ min: 8 })
    ], 
    authController.postLogin);

router.post('/signup', 
    [
        check('email').isEmail().withMessage('Invalid e-mail address.'),
        body('password', 'Invalid password').isLength({ min: 8 }),
        body('confirmPassword').custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Passwords must match.');
            }
            return true;
        })
    ],
     authController.postSignup);

router.post('/logout', authController.postLogout);

module.exports = router;