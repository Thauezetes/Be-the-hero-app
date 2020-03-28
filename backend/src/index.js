const express = require('express');
const cors = require('cors');
const routes =  require('./routes');

const app =   express();

app.use(cors());
app.use(express.json());
app.use(routes);
/*
PARANETROS
QUERY: filtros -> request.query
ROUTE: utilizados para identificar recursos -> request.params
Request Body: corpo da requisição, utilizado para criar/alterar recursos
*/



app.listen(3333); // porta do projeto