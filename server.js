const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

const db = require('./db');
const config = require('./config');
const router = require('./network/routes');

db(config.dbUrl);


app.use(bodyParser.json());
app.use(cors());
router(app);

app.use('/', express.static('dist'));

app.listen(config.port, () => {
    console.log('funciona');
});