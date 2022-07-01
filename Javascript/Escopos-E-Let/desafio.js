/*let N=parseInt(gets())
let pares=[]
let impares=[]
for(leti=0;i<N;i++){
  let num=parseInt(gets())
 num%2===0?pares.push(num):impares.push(num)
}
pares.sort((a,b)=>a-b)
impares.sort((a,b)=>b-a)
for(e of[pares,impares]){
 console.log(e)
}

function printPatos(p){
  for(var i=0; i <p.length; i++){

      if(p[i]== 0){
        console.log(0)
      }else if(p[i]== -1){
        console.log ()
      }else if(p[i]!= 0){
        console.log(p[i]-1)
      }
    }

  }

var p = [0,2,5,8,-1,1,6,-1];
printPatos(p);

/*----------------------------------*/
function printPattern (ranger){
  for(var i=1;i<=ranger;i++){
    var str = "";
    for(var j=1; j<= i; j++){
      str += j+ " ";
    }
    console.log(str)
  }
}
printPattern(10);*/

/*----------------------------------*/
function digitCount(num){
  var count =0;
  while(num!=0){
    num =Math.floor(num/10);
    count ++;
  }
  return count;

}

console.log(digitCount(99932));

/*----------------------------------*/