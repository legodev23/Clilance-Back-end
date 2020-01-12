const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const db = require('./db');
const config = require('./config');
const router = require('./network/routes');

db(config.dbUrl);


app.use(bodyParser.json());
router(app);

app.use('/', express.static('public'));

app.listen(config.port, () => {
    console.log('funciona');
});