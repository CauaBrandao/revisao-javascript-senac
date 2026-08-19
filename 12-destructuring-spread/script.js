/*
  EXERCÍCIO 12 — DESTRUCTURING E SPREAD
*/

// TODO:
// Extraia nome, curso e notas utilizando destructuring.

// TODO:
// Calcule a média das notas.

// TODO:
// Crie um NOVO objeto chamado alunoAtualizado usando spread.

// alunoAtualizado deve:
// - manter os dados anteriores;
// - adicionar a propriedade media;
// - alterar a situacao.

// IMPORTANTE:
// Não modifique o objeto aluno diretamente.

// TODO:
// Exiba os dois objetos para comparação.


/*
  EXERCÍCIO 12 — DESTRUCTURING E SPREAD
*/

const aluno = {
  nome: "Ricardo",
  idade: 20,
  curso: "Tecnologia em Sistemas para Internet",
  notas: [8.5, 7.0, 9.0],
  situacao: "Em análise",
};


let { nome, curso, notas } = aluno;

let media = (notas[0] + notas[1] + notas[2]) / notas.length;

let alunoAtualizado = {
  ...aluno,
  media: media,
  situacao: "Aprovado"
};


console.log(aluno);
console.log(alunoAtualizado);