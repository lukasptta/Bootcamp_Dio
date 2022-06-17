/*function escrevaMensagem(mensagem){
  console.log(mensagem);
}
escrevaMensagem('Hello word');
escrevaMensagem('A casa caiu');*/

/*

function soma(a,b){
  return a+b;
}
var resultado = soma(10,5);
console.log(resultado);
*/

// function que soma todos os elementos do arrays
function somaTudo(numeros){
    var total = 0;
    for(var num of numeros){
      total = total + num;
    }
    return total;
}
var arrayNumeros = [3,5,8,9,5,4];
var resultado = somaTudo(arrayNumeros);
console.log(resultado);

