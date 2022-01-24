const mongoose = require('mongoose')

const Produto = mongoose.model('Produto', {
  id: Number,
  nome: String,
  preço: Number,
})

module.exports = Produto