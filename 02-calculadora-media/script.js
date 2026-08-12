/*
  EXERCÍCIO 02 — CALCULADORA DE MÉDIA
*/


// TODO:
// Crie quatro variáveis/constantes para armazenar as notas.

// TODO:
// Calcule a soma das quatro notas.

// TODO:
// Calcule a média aritmética.

// TODO:
// Exiba no console:
// Nome do aluno
// Notas
// Média final

// DESAFIO:
// Formate a média com duas casas decimais.


const nomeAluno = "Cauã";
const nota1 = 7.5;
const nota2 = 8.0;
const nota3 = 5.5;
const nota4 = 8.5;

const somaNotas = nota1 + nota2 + nota3 + nota4;
const mediaFinal = somaNotas / 4;

console.log(`Nome do aluno: ${nomeAluno}`);
console.log(`Notas: ${nota1}, ${nota2}, ${nota3}, ${nota4}`);
console.log(`Média final: ${mediaFinal.toFixed(2)}`);
