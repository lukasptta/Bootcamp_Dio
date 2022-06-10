let count = 0;
const current_Number = document.getElementById('currentNumber');
function increment(){
  count++;
  current_Number.innerHTML = count;
}
function decrement(){
  count--;
  current_Number.innerHTML = count;
}
