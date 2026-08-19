/*
  EXERCÍCIO 13 — LISTA DE TAREFAS IMUTÁVEL
*/
  // TODO:
  // Retorne um NOVO array incluindo novaTarefa.
  // TODO:
  // Retorne um NOVO array.
  // Altere apenas a tarefa correspondente ao id.
  // TODO:
  // Retorne um NOVO array sem a tarefa informada.
// TODO:
// Teste as três funções sem alterar diretamente tarefas.

const tarefas = [
  { id: 1, descricao: "Estudar React", concluida: false },
  { id: 2, descricao: "Praticar algoritmos", concluida: true }
];

const adicionarTarefa = (lista, novaTarefa) => [...lista, novaTarefa];

const concluirTarefa = (lista, id) => {
  return lista.map(tarefa => 
      tarefa.id === id ? { ...tarefa, concluida: true } : tarefa
  );
};

const removerTarefa = (lista, id) => {
  return lista.filter(tarefa => tarefa.id !== id);
};

let novaTarefa = { id: 3, descricao: "Ler documentação", concluida: false };

let tarefasComAdicao = adicionarTarefa(tarefas, novaTarefa);
let tarefasComConclusao = concluirTarefa(tarefasComAdicao, 1);
let tarefasFinais = removerTarefa(tarefasComConclusao, 2);

console.log(tarefas);
console.log(tarefasFinais);