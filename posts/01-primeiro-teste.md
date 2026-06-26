# Seu primeiro teste com Cypress

> Rascunho — post #1 da série. Código: `cypress/e2e/01-primeiro-teste.cy.js`

## O que vamos aprender

- O que é Cypress e por que ele é diferente
- A anatomia de um teste: `describe`, `it` e os comandos `cy.*`
- O papel dos hooks (`beforeEach`)

## A anatomia de um teste

```js
describe('Primeiro teste', () => {   // suíte: agrupa testes relacionados
  beforeEach(() => {
    cy.visit('/')                    // roda antes de cada `it`
  })

  it('carrega a página e valida o título', () => {
    cy.url().should('include', 'example.cypress.io')
    cy.get('h1').should('contain.text', 'Kitchen Sink')
  })
})
```

- **`describe`** agrupa testes em uma suíte.
- **`it`** é um caso de teste. Leia como uma frase: _"it carrega a página..."_.
- **`cy.*`** são comandos que conversam com o navegador.
- **`beforeEach`** deixa a página no estado inicial — evita repetir código.

## Pontos para destacar no post

- O Cypress **espera** automaticamente os elementos: nada de `sleep()`.
- Cada comando é enfileirado e executado de forma assíncrona, mas você escreve como se fosse síncrono.

_(continuar...)_
