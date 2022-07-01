const numeros=[2,3,6,5,10];
let novoArrayNumeros=[]
    for(let i=0;i<numeros.length;i++){
    novoArrayNumeros.push(numeros[i]*2)
  }
  //console.log(numeros);
  //console.log(novoArrayNumeros);

//Map
/*
  const novoArrayMap = numeros.map(function(numeros){  return numeros * 2;
  });
const novoArrayMap = numeros.map(numeros => numeros  * 2);

console.log('novoArrayMap', novoArrayMap);
*/
///////////
/*
const nomes = ['Tales','Fernanda','Hugo','Tales'];

const nomesMinusculos = nomes.map(function(nome){
  return nome.toLocaleLowerCase();
})

const nomesMinusculos = nomes.map(nome=> nome.toLocaleLowerCase())
console.log(nomesMinusculos);



let numberPar=[]

for(i=0;i<100;i++){
  if([i] % 2==0){
    numberPar.push(i);
  }
}*/
//console.log(numberPar);

// filter
 
//for(i=0;i<number.length;i++){
//
let number=[2,5,8,65,12,4];

const numerosfiltrado = number.filter(function(numero)
{
return numero % 2 === 0; 
})
console.log('numerosfiltrado', numerosfiltrado)

