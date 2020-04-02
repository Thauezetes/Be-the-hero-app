const express = require('express');
const cors = require('cors');
const {errors }=  require('celebrate');
const routes =  require('./routes');

const app =   express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
/*
PARANETROS
QUERY: filtros -> request.query
ROUTE: utilizados para identificar recursos -> request.params
Request Body: corpo da requisição, utilizado para criar/alterar recursos
*/



module.exports = app; 