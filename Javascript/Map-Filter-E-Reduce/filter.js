/*var numeros = [10,80,9,6,1,5,12];

var numerosfiltrado = numeros.filter(item =>  {return item >=10})

console.log(numerosfiltrado);
*/
 

// filtra numeros impares e pares

var numeros = [10,28,27,6,8,9,10]

var pares = item => {return !(item % 2)};

var impares = item => {return item % 2};

var numerosPares= numeros.filter(pares);
var numerosImpar= numeros.filter(impares);


console.log(numerosPares);
console.log(numerosImpar);

var filmes = [
    {titulo:'titanic', duracao: 200, nota: 8},
    {titulo:'avanger', duracao: 300, nota: 9}
]
var notaDeCorte =  9;

var bons= item => {
  return item.nota>= notaDeCorte;
}


var cinemaBons = filmes.filter (bons);

console.log(cinemaBons);


