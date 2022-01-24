var array = {'fizz': 'buzz', 'foo': null, 'bar': 42, 'miss': true, 'kar': 20, 'max': null, 'tk': 'rk'}

const faxina = (array) => {
  
  Object.keys(array).forEach(key => {

    if (array[key] && typeof array[key] === Object){

      faxina(array[key]);

    } else if (array[key] === null) delete array[key];
  })
}

faxina(array)

console.log(array)