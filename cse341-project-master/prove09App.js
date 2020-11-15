const express = require('express');
const bodyParser = require('body-parser');

const pokeRoutes = require('./routes/prove09');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/pokemon', pokeRoutes);

app.listen(8080);