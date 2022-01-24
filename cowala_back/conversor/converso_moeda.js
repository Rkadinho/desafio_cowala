const express = require('express');
const app = express()
const rotas_moedas = require('./routes/rotas_moedas');
require('dotenv').config();
const mongoose = require('mongoose');

const userBd = process.env.USER_BD
const passBd = process.env.PASS_BD

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use('/moeda', rotas_moedas)

mongoose.connect(
  `mongodb+srv://${userBd}:${passBd}@listacluster.zrjee.mongodb.net/conversoMoedas?retryWrites=true&w=majority`
)
  .then(() => {
    console.log('banco de dados conectado')
    app.listen(3000)
  })
  .catch((err) => console.log(err))