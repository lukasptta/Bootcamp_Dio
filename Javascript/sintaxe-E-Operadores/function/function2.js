function somaNum(number){
  var total = 0;

  for(var num of number){
    total += num;
  }
  return total;
}

var arrayNew = [3,5,9,6,8,10];
var resultado = somaNum(arrayNew);
console.log('somaNum',resultado);
