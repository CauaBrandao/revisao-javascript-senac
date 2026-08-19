/*
  EXERCÍCIO 08 — CATÁLOGO DE PRODUTOS
*/

// TODO:
// Crie um array chamado produtos com pelo menos 5 objetos.
//
// Cada produto deve possuir:
// id
// nome
// preco
// categoria
// emEstoque

// TODO:
// Percorra o array com for, for...of ou forEach().

// TODO:
// Para cada item, mostre no console uma frase formatada
// contendo as informações do produto.

const produtos = [
  { nome: "Caderno", preco: 25.50, estoque: 100 },
  { nome: "Mochila", preco: 150.00, estoque: 30 },
  { nome: "Estojo", preco: 15.90, estoque: 50 }
];

for (let produto of produtos) {
  console.log(`Produto: ${produto.nome} | Preço: R$ ${produto.preco} | Estoque: ${produto.estoque} unidades`);
}