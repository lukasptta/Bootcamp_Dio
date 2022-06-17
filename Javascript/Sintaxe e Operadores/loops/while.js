
//PingPOng

var contadot = 0;
while (contadot < 100){
  if(contadot % 3===0 && contadot%5 ===0){
    console.log(`${contadot}-PingPong`)  
  }else if (contadot % 5===0){
    console.log(`${contadot}- Pong`) 
  }else if(contadot % 3 ===0){
    console.log(`${contadot}- Ping`) 
  }
  contadot++;
}
console.log(contadot)