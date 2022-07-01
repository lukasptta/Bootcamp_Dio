// crie uma funcção que recebe o array alunos e um numero que ira representa a media final
// percorra o array e popule um novo array auxiliar apenas com os os alunos cujas notas sao maiores ou iguais a media final
// utilize a tecnica object destruturing para manipular as propriedades desejadas de cada aluno
const alunos =[
  {
    nome:'joao',
    nota:4,
    turma:'1B',

  },
  {
    nome:'Sofia',
    nota: 9.5,
    turma:'2B',

  },
  {
    nome:'Isabele',
    nota:9,
    turma:'3C',

  },
  {
    nome:'Paulo',
    nota:6,
    turma:'2B',

  },
];


function alunoAprovados(arr,media){
  let aprovados= []; //array auxiliar
  for(let i=0; i < arr.length; i++){

    const {nota,nome}=arr[i];
    if(nota >= media){ //se aluno tiver nota maior ou igual media
      aprovados.push(nome);
    }
  }
  return aprovados;
}
console.log(alunoAprovados(alunos,5));