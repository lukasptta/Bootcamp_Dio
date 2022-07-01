var pessoa ={
  idade:25,
  nome:"lucas",
  sobrenome:"maciel",
  altura:1.90,
  aniversario: function(){
    pessoa.idade++;
  },
  nomeSobrenome:function(){
    pessoa.nome = pessoa.nome + " " + pessoa.sobrenome;

  }
}
pessoa.nomeSobrenome();
pessoa.aniversario();
pessoa.aniversario();
console.log(pessoa);