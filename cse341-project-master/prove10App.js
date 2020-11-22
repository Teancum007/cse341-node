const express = require('express');
const router = express.Router();

// Path to your JSON file, although it can be hardcoded in this file.
const dummyData = require('./models/avengers.json');

router.get('/', (req, res, next) => {
    res.render('pages/prove10', {
        title: 'Prove 10',
        path: '/teamActivities/10',
    });
});

router.get('/fetchAll', (req, res, next) => {
    res.json(dummyData);
});

router.post('/insert', (req, res, next) => {
/************************************************ 
* INSERT YOUR WEB ENDPOINT CODE HERE
************************************************/
    const name = req.body.name;
    res.status(201).json({
        post: { name: name }
    });
});