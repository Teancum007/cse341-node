const fs = require('fs');
const path = require('path');

module.exports = class Products {
    getProducts(callBack) {
        fs.readFile(path.join(__dirname, 'products.json'), callBack);
    }
}