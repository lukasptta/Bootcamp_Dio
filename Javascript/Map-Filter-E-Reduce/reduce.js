/*
let pessoas = [
  {
    nome: "lucas",
    idade:29
  },
  { nome:"sabrina",
    idade: 20

  },
  {
    nome:"thiago",
    idade:30
  },
  {
    nome:"pedro",
    idade:26
  },
  {
    nome:"carol",
    idade:16
  }
];

//console.log(pessoas)

const pessoasAgrupadas=pessoas.reduce(function(
  valorAcumulador,valorArray){
 const propMaiorOuMenor=valorArray.idade>=18?'maiores':'menores';
 valorAcumulador[propMaiorOuMenor].push(valorArray);
  return valorAcumulador;
 },{maiores:[],menores:[]})
 console.log('pessoas Agrupadas',pessoasAgrupadas);

 */

const frutas = ['maçapapaia','maça verde','laranja','abacaxi'];

frutas.filter((fruta)=> fruta.includes('maça'))
console.log(fruta)

