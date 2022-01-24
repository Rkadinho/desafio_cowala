const request = require('request')

const moedas = 'USD-BRL'

const options = {
  url: `https://economia.awesomeapi.com.br/last/${moedas}`,
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Aaccept-Charset': 'utf-8'
  }
}

const callback_cotacao = function(erro, res, body) {
  let json = JSON.parse(body)
  console.log(json)
}

const callback_api = function(erro, res, body){
  let json = JSON.parse(body)
  moedaOriginal = String(json.USDBRL['codein'])
  moedaDaConversão = String(json.USDBRL['code'])
  valor = parseFloat(json.USDBRL['bid']).toFixed(2)
}

request(options, callback_api)


module.exports = callback_api