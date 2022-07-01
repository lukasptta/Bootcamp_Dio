function nameq (num1,num2) {
  const saoIguais = num1 === num2;
  const soma = num1 + num2;

  return saoIguais?"são iguais":"não são iguais";

}

console.log(nameq(1,2));
///>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function comparaNumeros(num1,num2){
  const primeiraFrase=criaPrimeiraFrase(num1,num2);
  const segundaFrase=criaSegundaFrase(num1,num2);
 }
 function criaPrimeiraFrase(num1,num2){
   let saoIguais='';
   if(num1!== num2){
     saoIguais='não';
  }
  return Os números${num1}e${num2}${saoIguais}são iguais.
 };
 function criaSegundaFrase(num1,num2){
  const soma=num1+num2;
  const compara10=soma>10;
   const compara20=soma>20;
   if(compara10)
 }