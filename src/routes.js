const express = require('express');

const readFile = require('./utils/readFile');

const routes = express.Router();

routes.post('/readfile', readFile.readFile);

module.exports = routes;