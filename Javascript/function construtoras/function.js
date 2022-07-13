

// funçoes usadas para construir objetos;

function Person(name,idade){
  this.name = name
  this.idade = idade
  this.walk = function(){
    return "andando"
  } 
}
const age = new Person (); 
const lp = new Person();

age.idade = 29

console.log(lp.name)
console.log(Person.age)