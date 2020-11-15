const express = require('express');

const pokeControler = require('../controllers/prove09');

const router = express.Router();

router.get('/pokemon', pokeControler.getPokemon);

module.exports = router;