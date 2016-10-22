const express = require('express');
const app = module.exports = express();
const bodyParser = require('body-parser');
// const log = require('debug')('bot:app:chart');

const middle = require('../shared/middle');
const { stateAuthentication } = middle;
const { router } = require('./router');

app.use(bodyParser.json());

app.post('/:type', stateAuthentication, router);
