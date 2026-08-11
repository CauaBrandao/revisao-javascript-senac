# Exercício 22 — Organização do código com ES Modules

## Objetivo

Separar dados e funções em diferentes arquivos JavaScript e integrá-los por meio de `import` e `export`.

## Estrutura

```text
22-es-modules/
├── README.md
├── index.html
└── src/
    ├── main.js
    ├── data/
    │   └── produtos.js
    └── utils/
        ├── calcularTotal.js
        └── filtrarProdutos.js
```

## Requisitos

- exportar os produtos;
- criar uma função para calcular total;
- criar uma função para filtrar produtos;
- utilizar `named export`;
- utilizar `default export` pelo menos uma vez;
- importar tudo em `main.js`.

## Observação

Abra o projeto usando um servidor local, pois módulos ES podem não funcionar corretamente abrindo o HTML diretamente pelo sistema de arquivos.
