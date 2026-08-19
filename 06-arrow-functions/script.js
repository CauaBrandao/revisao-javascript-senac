/*
  EXERCÍCIO 06 — ARROW FUNCTIONS
*/

// TODO:
// Reescreva as funções abaixo utilizando arrow functions.

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Não é possível dividir por zero";
  }

  return a / b;
}

// TODO:
// Identifique quais funções podem utilizar retorno implícito.

// TODO:
// Crie uma arrow function calcular() mantendo o comportamento do exercício anterior.


const calcular = (a, b, op) => ({ "+": a + b, "-": a - b, "*": a * b, "/": b === 0 ? "Erro: Divisão por zero" : a / b }[op] || "Erro: Operação desconhecida.");

console.log(calcular(10, 5, "+"));
console.log(calcular(10, 5, "-"));
console.log(calcular(10, 5, "*"));
console.log(calcular(10, 5, "/"));
console.log(calcular(10, 0, "/"));
console.log(calcular(10, 5, "potencia"));