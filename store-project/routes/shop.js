const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('pages/planetStore', { 
        title: 'Buy a Planet!', 
        path: '/planetStore', // For pug, EJS 
        //activeTA04: true, // For HBS
        //contentCSS: true, // For HBS
    });
});

module.exports = router;