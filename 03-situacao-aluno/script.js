/*
  EXERCÍCIO 03 — SITUAÇÃO DO ALUNO
*/


// Defina as faixas de classificação.
// Exemplo:
// Aprovado: média >= ...
// Recuperação: média >= ... e < ...
// Reprovado: média < ...

// TODO:
// Crie uma variável para armazenar a situação final.

// TODO:
// Utilize if / else if / else para classificar o aluno.

// TODO:
// Exiba uma mensagem contendo nome, média e situação.


const nome = "Cauã";
let nota1 = 8.0;
let nota2 = 4.5;
let media = (nota1 + nota2) / 2;
let situacao;

if (media >= 7.0) {
    situacao = "Aprovado";
} else if (media >= 5.0 && media < 7.0) {
    situacao = "Recuperação";
} else {
    situacao = "Reprovado";
}

console.log(`Aluno: ${nome} | Média: ${media} | Situação: ${situacao}`);