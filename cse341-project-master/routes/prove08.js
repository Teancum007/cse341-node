const express = require('express');
const router = express.Router();

const fs = require('fs');
const jdata = require('../models/items');

const ITEMS_PER_PAGE = 10;

router.get('/', (req, res, next) => {
    const page = +req.query.page || 1;
    const items = new jdata();
    items.getItems((err, data) => {
        if (err) {
            console.log('File could not be read.');
            res.end();
        } else {
            const itemsData = JSON.parse(data)
            .skip((page - 1) * ITEMS_PER_PAGE)
            .limit(ITEMS_PER_PAGE);
            res.render('pages/prove08', { 
                title: 'Prove Project 08', 
                path: '/prove08', // For pug, EJS 
                activeTA03: true, // For HBS
                contentCSS: true, // For HBS
                itemsData: itemsData,
                currentPage: page,
                hasPrevPage: page > 1,
                nextPage: page + 1,
                prevPage: page - 1,
                iPer: ITEMS_PER_PAGE
            });
        }
    });
});

router.post('/',(req, res, next) => {
    const searchQuery = req.body.searchQuery;
    const items = new jdata();
    items.getItems((err, data) => {
        if (err) {
            console.log('File could not be read.');
            res.end();
        } else {
            const itemsData = JSON.parse(data);
            const foundItems = [];
            let searchIndex = 0;

            if (searchIndex >= 0) {
                
            }
        }
    });        
});



module.exports = router;