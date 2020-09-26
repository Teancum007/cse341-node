const express = require('express');
const router = express.Router();

const bookList = [];
const summaryList = [];

router.get('/',(req, res, next) => {
    res.render('pages/prove02', { 
        title: 'Prove Project 02', 
        path: '/prove02', // For pug, EJS 
        books: bookList,
        sums: summaryList,
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

router.post('/addBook', (req, res, next) => {
    const newBook = req.body.newBook;
    const newSummary = req.body.summary;
    const bookIndex = bookList.indexOf(newBook);
    if (bookIndex === -1) {
        bookList.push(newBook);
        summaryList.push(newSummary);
    } else {
        res.write('<h2> Book already in directory. </h2>');
    }
    //res.redirect('/');
    next;
});

router.get('', (req, res, next) =>{
    
    res.render('/pages/prove02/display02', {
        title: 'Prove Project 02', 
        path: '/prove02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

module.exports = router;