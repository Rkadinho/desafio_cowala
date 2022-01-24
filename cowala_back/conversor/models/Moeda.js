const mongoose = require('mongoose')

const Moeda = mongoose.model('Moeda', {
  id: Number,
  moedaOriginal: String,
  moedaDaConversão: String,
  valorEnviado: Number,
  valorConvertido: Number,
})

module.exports = Moeda