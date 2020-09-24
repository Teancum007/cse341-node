//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const router = express.Router();

const userList =['Ian', 'Joshua', 'Rachel'];

router.get('/',(req, res, next) => {
    res.render('pages/ta02', { 
        title: 'Team Activity 02', 
        path: '/ta02', // For pug, EJS
        users: userList, 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

router.post('/addUser', (req, res, next) => {
    const newUserName = req.body.newUser;
    const nameIndex = userList.indexOf(newUserName);
    if (nameIndex === -1) {
        userList.push(newUserName);
    } else {
        res.write('<h2> Name already in directory. </h2>');
    }
    res.redirect('/');
});

router.post('/removeUser', (req, res, next) => {
    const delUserName = req.body.dUserName;
    const foundIndex = userList.indexOf(delUserName);
    if (foundIndex > -1) {
        userList.splice(foundIndex, 1);
    } else {
        res.write('<h2> No such name in directory. </h2>');
    }
    res.redirect('/');
});

module.exports = router;