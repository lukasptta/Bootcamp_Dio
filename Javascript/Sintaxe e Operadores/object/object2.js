

var novoUsuario={
  nome:'lucas',
  idade:28,
  pais:'brasil'
};
//console.log(novoUsuario);
var {nome,pais,idade} = novoUsuario;
console.log(nome,pais,idade);

// armazenar em outra variavel
var {nome: primeiroNome} = novoUsuario;
console.log(primeiroNome);