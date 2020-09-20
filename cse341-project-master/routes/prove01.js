const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('pages/prove01/form', { 
        title: 'Prove Project 01', 
        path: '/prove01', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

router.post('/submit',(req, res, next) => {
    //console.log(req.body.person);
    //console.log(req.body.reason);
    res.render('pages/prove01/display', { 
        title: 'Prove Project 01', 
        path: '/prove01', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        person: req.body.person,
        reason: req.body.reason,
    });
});

module.exports = router;