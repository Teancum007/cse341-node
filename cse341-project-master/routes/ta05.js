const express = require('express');
const session = require('express-session');
const router = express.Router();

router.get('/',(req, res, next) => {
    if (!req.session.style) {
        req.session.style = "#ffffff";
    }
    if (!req.session.counter) {
        req.session.counter = 0;
    }
    const color = req.session.style;
    const count = req.session.counter;
    res.render('pages/ta05', { 
        title: 'Team Activity 05', 
        path: '/ta05', // For pug, EJS
        newColor: color,
        count: count,
        activeTA04: true, // For HBS
        contentCSS: true, // For HBS
    });
});

router.post('/change-style', (req, res, next) => {
    req.session.style = req.body.newColor;
    res.redirect('/ta05');
});

router.post('/counter', (req, res, next) => {
    if(req.body.plus){
        req.session.counter++;
    }
    if (req.body.minus) {
        req.session.counter--;
    }
    res.redirect('/ta05');
});

router.post('/reset', (req, res, next) => {
    req.session.destroy();
    res.redirect('/ta05');
});

module.exports = router;