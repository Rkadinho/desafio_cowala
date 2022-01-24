const axios = require('axios')

const api = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br/last/USD-BRL'
})

module.exports = api;