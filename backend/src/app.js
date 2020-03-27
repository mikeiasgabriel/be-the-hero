const express = require('express');
const routes = require('./routes');
const { errors } = require('celebrate');
const cors = require('cors');

const app = express();

//Avisa para o express que estamos utilizando o formato json
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors())

module.exports = app;