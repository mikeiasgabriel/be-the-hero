const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

//Avisa para o express que estamos utilizando o formato json
app.use(express.json());
app.use(routes);
app.use(cors());

app.listen(3333);  