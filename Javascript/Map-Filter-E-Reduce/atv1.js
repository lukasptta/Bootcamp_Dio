

/*
//Map
function mapSemThis(arr){
  return arr.map(function(item){
    return item * 2;
  });
}
const nums = [2,4,6,8,3,56,9];

//console.log(mapSemThis(nums));
*/
//filter


function filtraPares(arr){
  return arr.filter(callback)
}
function callback(item){
  return item % 2 !== 0; 
}
const meuArray= [1,23,55,67,30,2,4];

console.log(filtraPares(meuArray));



// REDUCE

function somaNumeros(arr){
  return arr.reduce(function(prev,current)){
    return prev + current;
  }
}
const arr = [1,2];

console.log(somaNumeros(arr));