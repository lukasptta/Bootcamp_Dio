


function substPares(array){
  if(!array) return -1; // array zerado
  if(!array.length) return -1;

  for(let i=0; i < array.length; i++){
     if(array[i]=== 0){
       console.log("vc já é zero!");
     }else if(array[i] % 2 === 0){
       console.log(`Substituindo ${array[i]} por 0...`);
       array[i]= 0;  // o elemento nesse index vai ser igual a zero!
     }
  }
  return array;
}
let arr = [];
substPares(arr);