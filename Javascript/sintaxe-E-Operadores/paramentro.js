function exponencial(array,num=1){
  const result = [];

  for(let i = 0; i < array.length; i++){
    result.push(array[i] ** num);
  }
  return result;
}
let conta = exponencial([1,2,4,8],4);
console.log(conta);
















































