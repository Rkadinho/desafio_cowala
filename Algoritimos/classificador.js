var usuarios = [
  {nome: 'jeni', souEu: false, responsavel: true},
  {nome: 'jack', souEu: false, responsavel: false},
  {nome: 'moises', souEu: false, responsavel: true},
  {nome: 'italo', souEu: false, responsavel: false},
  {nome: 'edi', souEu: false, responsavel: true},
  {nome: 'bea', souEu: false, responsavel: false},
  {nome: 'Ricardo', souEu: true, responsavel: false},
]


usuarios.sort(function(x,y) {
  let a = x.nome.toLocaleUpperCase(),
  b = y.nome.toLocaleUpperCase();

  return a == b ? 0 : a > b ? 1 : -1

})





console.table(usuarios)
