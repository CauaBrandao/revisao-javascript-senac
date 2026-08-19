/*
  EXERCÍCIO 05 — CALCULADORA UTILIZANDO FUNÇÕES
*/

function somar(a, b) {
  // TODO
}

function subtrair(a, b) {
  // TODO
}

function multiplicar(a, b) {
  // TODO
}

function dividir(a, b) {
  // TODO:
  // Trate divisão por zero.
}

function calcular(a, b, operacao) {
  // TODO:
  // Escolha a função correta conforme a operação.
  // Trate também uma operação desconhecida.
}

// TODO:
// Faça alguns testes com calcular().

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
      return "Erro: Divisão por zero não é permitida.";
  }
  return a / b;
}

function calcular(numero1, numero2, operacao) {
  if (operacao === "+" || operacao === "soma") {
      return somar(numero1, numero2);
  } else if (operacao === "-" || operacao === "subtracao") {
      return subtrair(numero1, numero2);
  } else if (operacao === "*" || operacao === "multiplicacao") {
      return multiplicar(numero1, numero2);
  } else if (operacao === "/" || operacao === "divisao") {
      return dividir(numero1, numero2);
  } else {
      return "Erro: Operação desconhecida.";
  }
}

console.log(calcular(10, 5, "+"));
console.log(calcular(10, 5, "-"));
console.log(calcular(10, 5, "*"));
console.log(calcular(10, 5, "/"));
console.log(calcular(10, 0, "/"));
console.log(calcular(10, 5, "potencia"));