require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const rotas_produtos = require('./routes/rotas_produtos')

const userBd = process.env.USER_BD
const passBd = process.env.PASS_BD

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use('/produto', rotas_produtos)

mongoose.connect(
  `mongodb+srv://${userBd}:${passBd}@listacluster.zrjee.mongodb.net/listaDeMercado?retryWrites=true&w=majority`
)
  .then(() => {
    console.log('banco de dados conectado')
    app.listen(3000)
  })
  .catch((err) => console.log(err))