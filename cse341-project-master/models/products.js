const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  //description: {
  //  type: String,
  //  required: true
  //},
  //imageUrl: {
  //  type: String,
  //  required: true
  //},
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('Product', productSchema);

/*******
class Products {
    constructor(title, price, id) {
        this.title = title;
        this.price = price;
        this._id = id ? new mongodb.ObjectId(id) : null;
    }

    save() {
        const db = getDb();
        let db0p;
        if (this._id) {
            db0p = db.collection('products')
            .updateOne({_id: new mongodb.ObjectId(this._id)}, {$set: this});
        } else {
            db0p = db.collection('products').insertOne(this);
        }
        return db0p;
    }

    static fetchAll() {
        return db.collection('products')
        .find()
        .toArray()
        .then(products => {
            return products;
        })
        .catch(err => {
            console.log(err);
        });
    }

    static findById(prodId) {
        const db = getDb();
        return db.collection('products')
        .find({_id: mongodb.ObjectId(prodId)})
        .next()
        .then(product => {return product})
        .catch(err => {
            console.log(err);
        });
    }

    static deleteById() {
        const db = getDb();
        db.collection('products')
        .deleteOne({_id: new mongodb.ObjectId(prodId)});
    }
}

//module.exports = class Products {
  //  getProducts(callBack) {
  //      fs.readFile(path.join(__dirname, 'products.json'), callBack);
  //  }
//}

module.exports = Products;

*/