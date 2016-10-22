const express = require('express');
const app = module.exports = express();
const bodyParser = require('body-parser');
const log = require('debug')('shartify:'); // eslint-disable-line

const { router } = require('./router');

app.use(bodyParser.json());

app.post('/:type', router);
