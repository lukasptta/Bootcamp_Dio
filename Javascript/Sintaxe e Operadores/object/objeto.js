

var usuario = {
  nome:'lucas',
  idade: 29,
  youtube:'Lptech'
};

console.log(usuario);
console.log(usuario.nome);


usuario.ano =2022; // add ano
usuario.hobbies = ['musica', 'Programar', 'viajar'];
console.log(usuario);

// funcção anonima
var usuario2 = {
  digaOi: function(name){
    return `olá ${name}`;

  }
};
console.log(usuario2.digaOi("lucas"))