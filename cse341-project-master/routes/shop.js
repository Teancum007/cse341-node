const express = require('express');
const router = express.Router();

const mainControl = require('../controllers/primaryControl');

const fs = require('fs');
const jdata = require('../models/products');

router.get('/', mainControl.loadPlanets);

module.exports = router;