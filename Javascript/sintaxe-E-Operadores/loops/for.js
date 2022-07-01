/*for (var contador = 0 ; contador < 10;contador ++){
  console.log(contador);
}*/

/*var numerosAleatorios = [3,5,6,7,9,42,58];
for (var contador = 0 ; contador < numerosAleatorios.length; contador++){
 // console.log(numerosAleatorios[contador]);
 console.log(`${contador} - ${numerosAleatorios[contador]}`)
}*/


/*var numeros = [1,2,3,5,65,7,4];

for( var i = numeros.length-1; i>=0;i--){
  console.log(`Posição ${i} com descremento : ${numeros[i]}`);
}*/


for (var i =0 ; i < 50; i++){
  if(i % 2 === 0 ){
    continue;
  }
  console.log('utilizando continue', i)
}