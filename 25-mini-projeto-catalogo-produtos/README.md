# Exercício 25 — Mini Projeto: Catálogo de Produtos Interativo

## Objetivo

Desenvolver uma aplicação de catálogo utilizando **HTML, CSS e JavaScript puro**.

A aplicação deverá trabalhar com uma coleção de produtos e reconstruir a interface a partir dos dados sempre que filtros, ordenações ou favoritos forem alterados.

## Funcionalidades

A aplicação deverá permitir:

1. visualizar todos os produtos;
2. pesquisar produtos pelo nome;
3. filtrar por categoria;
4. visualizar somente produtos disponíveis;
5. ordenar por preço;
6. adicionar produtos aos favoritos;
7. remover produtos dos favoritos;
8. exibir a quantidade de favoritos;
9. manter favoritos após atualizar a página usando `localStorage`.

## Estrutura dos produtos

Cada produto deve possuir:

- `id`
- `nome`
- `categoria`
- `preco`
- `avaliacao`
- `imagem`
- `emEstoque`

## Regra principal

Prefira o fluxo:

```text
dados
  ↓
filtros / ordenação
  ↓
novo array
  ↓
renderização
```

Evite alterar elementos isoladamente em vários pontos do código.

## Conteúdos

Arrays de objetos, `map()`, `filter()`, `find()`, `some()`, `sort()`, eventos, DOM, imutabilidade, JSON, `localStorage` e organização da aplicação.
