
/*function printNumbers(){
  for(var i = 1; i<=10; i++){
    
    console.log(i*2);
  }
}
printNumbers();
*/
/*function printArray(arr){
  for(var i=0; i<arr.length; i++){
    console.log(arr[i]);

  }
}

var arr=["carro",2,6,78,'house'];
printArray(arr);
*/
/*
function printEven(arr){
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2==0){
      console.log(arr[i]);
    }
  }
}
var arr=[13,23,12,45,22,48,66,100];

printEven(arr);
*/
function deleteElement(arr, e) {
  for (var i=0;i<arr.length;i++){
    if(arr[i]==e){
      arr.splice(i,3); //Delete element from array
    }
  }
  return arr;
}
var arr = [23,56,4,78,5,63,45,210,56];
arr = deleteElement(arr, 56)

console.log(arr);

