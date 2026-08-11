import { products } from "./data/products.js";

/*
  EXERCÍCIO 25 — CATÁLOGO DE PRODUTOS INTERATIVO

  Regras:
  - não altere diretamente o array `products`;
  - use novos arrays para filtros e ordenação;
  - reconstrua a interface sempre que o estado mudar.
*/

// ============================================================
// 1. ELEMENTOS DO DOM
// ============================================================

// TODO:
// Selecione:
// search
// category-filter
// sort-filter
// stock-filter
// products-list
// results-count
// favorites-count
// empty-message


// ============================================================
// 2. ESTADO DA APLICAÇÃO
// ============================================================

// TODO:
// Crie variáveis para:
// termo pesquisado
// categoria selecionada
// ordenação selecionada
// somente em estoque
// favoritos


// ============================================================
// 3. LOCALSTORAGE
// ============================================================

function carregarFavoritos() {
  // TODO:
  // Leia "favorites" do localStorage.
  // Utilize JSON.parse() quando necessário.
}

function salvarFavoritos() {
  // TODO:
  // Utilize JSON.stringify() e localStorage.setItem().
}


// ============================================================
// 4. CATEGORIAS
// ============================================================

function renderizarCategorias() {
  // TODO:
  // Descubra as categorias existentes em products.
  // Evite duplicações.
  // Crie as options dinamicamente.
}


// ============================================================
// 5. FORMATAÇÃO
// ============================================================

function formatarPreco(valor) {
  // TODO:
  // Formate em Real brasileiro utilizando Intl.NumberFormat().
  return valor;
}


// ============================================================
// 6. CARD
// ============================================================

function criarCard(produto) {
  // TODO:
  // Retorne o HTML do card.
  // Mostre:
  // imagem
  // categoria
  // nome
  // avaliação
  // estoque
  // preço
  // botão de favorito
  return "";
}


// ============================================================
// 7. FILTROS
// ============================================================

function filtrarPorPesquisa(lista) {
  // TODO:
  return lista;
}

function filtrarPorCategoria(lista) {
  // TODO:
  return lista;
}

function filtrarPorEstoque(lista) {
  // TODO:
  return lista;
}


// ============================================================
// 8. ORDENAÇÃO
// ============================================================

function ordenarProdutos(lista) {
  // TODO:
  // Faça uma cópia antes de usar sort().
  return lista;
}


// ============================================================
// 9. PRODUTOS VISÍVEIS
// ============================================================

function obterProdutosVisiveis() {
  // TODO:
  // products
  // -> pesquisa
  // -> categoria
  // -> estoque
  // -> ordenação
  return products;
}


// ============================================================
// 10. RENDERIZAÇÃO
// ============================================================

function renderizarProdutos() {
  // TODO:
  // Obtenha os produtos visíveis.

  // TODO:
  // Gere os cards.

  // TODO:
  // Atualize contador de resultados.

  // TODO:
  // Controle a mensagem de lista vazia.
}


// ============================================================
// 11. FAVORITOS
// ============================================================

function isFavorito(id) {
  // TODO:
  // Utilize some().
  return false;
}

function alternarFavorito(id) {
  // TODO:
  // Adicione ou remova o id.
  // Prefira operações imutáveis.

  // TODO:
  // Salve e renderize novamente.
}

function atualizarContadorFavoritos() {
  // TODO
}


// ============================================================
// 12. EVENTOS
// ============================================================

// TODO:
// Pesquisa -> input.

// TODO:
// Categoria -> change.

// TODO:
// Ordenação -> change.

// TODO:
// Estoque -> change.

// TODO:
// Favoritos -> use delegação de eventos no container.


// ============================================================
// 13. INICIALIZAÇÃO
// ============================================================

// TODO:
// carregarFavoritos();
// renderizarCategorias();
// atualizarContadorFavoritos();
// renderizarProdutos();
