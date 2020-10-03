//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();

const fs = require('fs');
const jdata = require('../models/items');

router.get('/', (req, res, next) => {
    const items = new jdata();
    items.getItems((err, data) => {
        if (err) {
            console.log('File could not be read.');
            res.end();
        } else {
            const itemsData = JSON.parse(data);
            res.render('pages/ta03', { 
                title: 'Team Activity 03', 
                path: '/ta03', // For pug, EJS 
                activeTA03: true, // For HBS
                contentCSS: true, // For HBS
                itemsData: itemsData
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