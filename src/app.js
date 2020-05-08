const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const fileUpload = require('express-fileupload');

const app = express();

app.use(fileUpload({
  createParentPath: true
}));
app.use(cors());
app.use(express.json());
app.use(routes);

module.exports = app;

