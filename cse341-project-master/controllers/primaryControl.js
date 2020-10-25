const mongodb = require('mongodb');
const Products = require('../models/products');
const { validationResult } = require('express-validator/check');

const ObjectId = mongodb.ObjectID;

exports.loadPlanets = (req, res, next) => {
    /*const items = new jdata();
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
    });*/

    Products.find()
    .then(products => {
      res.render('pages/planetStore', {
        prods: products,
        pageTitle: 'Buy a Planet!',
        path: '/'
      });
    })
    .catch(err => {
      console.log(err);
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
            path: '/',
            editing: editMode,
            product: product
        });
    }).catch(err => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
    const prodId = req.body.productId;
    const uTitle = req.body.title;
    const uPrice = req.body.price;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).render('pages/planetStore', {
        path: '/planetStore',
        pageTitle: 'Buy a Planet!',
        isAuthenticated: false,
        errorMessage: errors.array() [0].msg
      });
    }
    
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

exports.getCart = (req, res, next) => {
    req.user
      .populate('cart.items.productId')
      .execPopulate()
      .then(user => {
        const products = user.cart.items;
        res.render('pages/cart', {
          path: '/cart',
          pageTitle: 'Your Cart',
          products: products
        });
      })
      .catch(err => console.log(err));
  };

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId)
      .then(product => {
        return req.user.addToCart(product);
      })
      .then(result => {
        console.log(result);
        res.redirect('/cart');
      });
};

exports.postCartDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    req.user
      .removeFromCart(prodId)
      .then(result => {
        res.redirect('/cart');
      })
      .catch(err => console.log(err));
};

exports.postOrder = (req, res, next) => {
    req.user
      .populate('cart.items.productId')
      .execPopulate()
      .then(user => {
        const products = user.cart.items.map(i => {
          return { quantity: i.quantity, product: { ...i.productId._doc } };
        });
        const order = new Order({
          user: {
            name: req.user.name,
            userId: req.user
          },
          products: products
        });
        return order.save();
      })
      .then(result => {
        return req.user.clearCart();
      })
      .then(() => {
        res.redirect('/orders');
      })
      .catch(err => console.log(err));
};
  
exports.getOrders = (req, res, next) => {
    Order.find({ 'user.userId': req.user._id })
      .then(orders => {
        res.render('shop/orders', {
          path: '/orders',
          pageTitle: 'Your Orders',
          orders: orders
        });
      })
      .catch(err => console.log(err));
    };