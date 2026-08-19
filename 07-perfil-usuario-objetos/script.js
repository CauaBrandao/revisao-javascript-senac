/*
  EXERCÍCIO 07 — PERFIL DE USUÁRIO
*/

// TODO:
// Crie um objeto usuario com:
// nome, idade, email, cidade e ativo.

// TODO:
// Adicione um método apresentar() que retorne uma frase sobre o usuário.

// TODO:
// Exiba a apresentação no console.

// TODO:
// Altere a cidade.

// TODO:
// Adicione a propriedade profissao.

// TODO:
// Exiba o objeto atualizado.

const usuario = {
  nome: "Cauã",
  idade: 20,
  email: "caua@gmail.com",
  exibirPerfil() {
      return `Nome: ${this.nome}, Idade: ${this.idade}`;
  }
};

console.log(usuario.nome);
console.log(usuario.idade);
console.log(usuario.exibirPerfil());

usuario.idade = 20;

usuario.cidade = "São Paulo";

console.log(usuario.idade);
console.log(usuario.cidade);
console.log(usuario);