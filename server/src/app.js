const express = require('express');
const bodyParser = require('body-parser');
const inquiryRoutes = require('./routes/inquiryRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api', inquiryRoutes);

module.exports = app;
