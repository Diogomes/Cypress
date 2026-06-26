# 🌿 Cypress — Aprendizado & Automação

Repositório didático para estudar **automação de testes E2E com [Cypress](https://www.cypress.io/)** e servir de base para uma série de posts de blog.

A cada conceito do framework corresponde **um arquivo de teste comentado** em `cypress/e2e/`, na ordem em que os posts são publicados. Os exemplos rodam contra o [Kitchen Sink oficial do Cypress](https://example.cypress.io) — então **não é preciso subir nenhuma aplicação local** para vê-los funcionando.

---

## 🚀 Começando

```bash
# 1. Instalar dependências (baixa o Cypress)
npm install

# 2. Abrir o Cypress em modo interativo (com interface)
npm run cy:open

# 3. Ou rodar tudo no terminal (headless)
npm run cy:run
```

| Script              | O que faz                                  |
| ------------------- | ------------------------------------------ |
| `npm run cy:open`   | Abre a interface do Cypress (Test Runner)  |
| `npm run cy:run`    | Roda todos os testes em modo headless      |
| `npm run cy:run:chrome` | Roda os testes no navegador Chrome     |

---

## 📁 Estrutura do projeto

```
cypress/
├── e2e/                      # Os testes (specs) — um arquivo por conceito/post
│   ├── 01-primeiro-teste.cy.js
│   ├── 02-locators-seletores.cy.js
│   ├── 03-acoes-interacoes.cy.js
│   ├── 04-asserções.cy.js
│   ├── 05-fixtures-dados.cy.js
│   ├── 06-network-intercept.cy.js
│   └── 07-comandos-customizados.cy.js
├── fixtures/                 # Massa de dados reutilizável (JSON)
│   └── usuario.json
└── support/
    ├── commands.js           # Comandos customizados (cy.getByData, cy.login...)
    └── e2e.js                # Setup global, carregado antes de cada spec
cypress.config.js             # Configuração (baseUrl, timeouts, viewport...)
posts/                        # Rascunhos dos artigos do blog
```

---

## 📚 Trilha de aprendizado (mapa dos posts)

Cada spec foi escrito para ser lido de cima a baixo, com comentários explicando o **porquê** de cada linha.

| # | Arquivo | Conceito |
| - | ------- | -------- |
| 1 | `01-primeiro-teste.cy.js`     | Anatomia de um teste: `describe`, `it`, `cy.visit`, hooks |
| 2 | `02-locators-seletores.cy.js` | **Locators**: ordem de preferência e como evitar testes frágeis |
| 3 | `03-acoes-interacoes.cy.js`   | Ações: `.type()`, `.click()`, `.check()`, `.select()` |
| 4 | `04-asserções.cy.js`          | Asserções implícitas/explícitas e retentabilidade |
| 5 | `05-fixtures-dados.cy.js`     | Fixtures e testes orientados a dados (data-driven) |
| 6 | `06-network-intercept.cy.js`  | `cy.intercept()`: espionar e simular requisições |
| 7 | `07-comandos-customizados.cy.js` | Comandos customizados e a estratégia `data-cy` |

---

## 🎯 A regra de ouro dos locators

A maior causa de testes instáveis é o **seletor errado**. Ordem de preferência:

1. **`[data-cy="..."]`** — atributo dedicado a teste. Não muda com CSS/texto. ✅ **Melhor**
2. **Texto visível** — `cy.contains('Salvar')`. Bom porque reflete o que o usuário vê.
3. **Atributos semânticos** — `role`, `aria-label`, `name`.
4. **Classes / IDs de CSS** — ⚠️ mudam quando o estilo muda.
5. **Estrutura do DOM** — `div > div > span`. ❌ **Pior**, quebra a qualquer refatoração.

> 💡 Em um projeto real, padronize **um** atributo (ex.: `data-cy`) e use o comando
> `cy.getByData('...')` definido em `support/commands.js`.

---

## ✍️ Sobre os posts

A pasta `posts/` guarda rascunhos dos artigos. A ideia é que **código e texto andem juntos**:
o leitor abre o post, copia o spec correspondente e roda na própria máquina.

---

## 🔗 Referências

- [Documentação oficial do Cypress](https://docs.cypress.io/)
- [Best Practices — Cypress](https://docs.cypress.io/guides/references/best-practices)
- [example.cypress.io (Kitchen Sink)](https://example.cypress.io/)
