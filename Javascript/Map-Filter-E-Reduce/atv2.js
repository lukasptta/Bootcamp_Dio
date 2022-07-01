const array1 = [1,2,3,4,5,6];

//const map1 = array1.map(x => x * 2); 

/*
//-----------------------------------------
// arrow fuction 
const map1 = array1.map( num => Math.pow(num,2)
);
//  normal function
const map1 = array1.map(function (num){
 return Math.pow(num,2)
} );

console.log(map1);
//------------------------------------------------
*/
//retorne a soma de todos os positivos. Se a matriz estiver vazia ou não houver números positivos, retorne 0

const array = [1,-4,12,0,-3,29,-150];

array.filter(function(num){
  return num > 0;
})
const soma = array.reduce(function(accumulator,currentValue){
  return accumulator + currentValue;
}, 0);

console.log(soma);
