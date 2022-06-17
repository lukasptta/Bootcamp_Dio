function verif (num1,num2)
{
  if(num1 ===num2){
    return "os numeros são iguais!"
  }else if (!num1 || !num2){
    return "Digite numeros validos!"
  }else if(num1+num2 > 10 || num1+num2 < 20){
    return `os numeros ${num1} e ${num2} não são iguais. Sua soma que e maior que 10 e maior que 20`
  }
}
console.log(verif(0));