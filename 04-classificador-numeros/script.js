/*
  EXERCÍCIO 04 — CLASSIFICADOR DE NÚMEROS
*/

function classificarNumero(numero) {
  // TODO:
  // Descubra se o número é positivo, negativo ou zero.

  // TODO:
  // Quando o número não for zero, descubra também se ele é par ou ímpar.

  // TODO:
  // Retorne uma mensagem com a classificação.
}

// TODO:
// Teste a função com pelo menos cinco valores diferentes.


function classificarNumero(numero) {
  
}


function classificarNumero(numero) {
    let sinal;
    let paridade;

    if (numero > 0) {
        sinal = "positivo";
    } else if (numero < 0) {
        sinal = "negativo";
    } else {
        sinal = "zero";
    }

    if (numero % 2 === 0) {
        paridade = "par";
    } else {
        paridade = "ímpar";
    }

    return `O número ${numero} é ${sinal} e ${paridade}.`;
}

console.log(classificarNumero(10));
console.log(classificarNumero(-7));
console.log(classificarNumero(0));
console.log(classificarNumero(42));
console.log(classificarNumero(-4));