const mongodb = require('mongodb');
const Products = require('../models/products');

const ObjectId = mongodb.ObjectID;

exports.loadPlanets = (req, res, next) => {
    const items = new jdata();
    items.getProducts((err, data) => {
        if (err) {
            console.log('File could not be read.');
            res.end();
        } else {
            const itemsData = JSON.parse(data);
            res.render('pages/planetStore', { 
                title: 'Buy a Planet!', 
                path: '/planetStore', // For pug, EJS 
                //activeTA03: true, // For HBS
                //contentCSS: true, // For HBS
                itemsData: itemsData
            });
        }
    });
};

exports.addProduct = (req, res, next) => {
    const title = req.body.title;
    const price = req.body.price;
    const products = new Products(title, price);
    products.save().then(result => {
        res.redirect('/');
    });
};

exports.deleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Products.deleteById(prodId).then(() => {
        res.redirect('/');
    });
};

exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return red.redirect('/');
    }
    const prodId = req.params.productId;
    Products.findById(prodId).then(product => {
        if (!product) {
            return red.redirect('/');
        }
        res.render('', {
            pageTitle: 'Edit Product',
            //path '/',
            editing: editMode,
            product: product
        });
    }).catch(err => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
    const prodId = req.body.productId;
    const uTitle = req.body.title;
    const uPrice = req.body.price;
    
    const product = new Products(
        uTitle,
        uPrice,
        new ObjectId(prodId)
    );
    product.save().then(result => {res.redirect('/')});
};

exports.loadProduct = (req, res, next) => {
    Products.fetchAll()
    .then(products => {
        res.render('pages/planetStore', { 
            title: 'Buy a Planet!', 
            path: '/planetStore', // For pug, EJS 
            //activeTA03: true, // For HBS
            //contentCSS: true, // For HBS
            //itemsData: itemsData
        });
    });
};