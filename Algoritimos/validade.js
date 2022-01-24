const validade = new Date('2022-04-25')
const data = new Date()

var conversorDias_Mes = Math.abs(validade.getTime() - data.getTime());
var diasVencimento = Math.ceil(conversorDias_Mes / (1000 * 3600 * 24)); 

if(validade <= data) {
  console.log(true, `vencido`)
} else {
  console.log(false, `Faltam ${diasVencimento} dias para vencer`)
}