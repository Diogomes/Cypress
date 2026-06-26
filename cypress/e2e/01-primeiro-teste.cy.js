/// <reference types="cypress" />

// ============================================================================
// POST 1 — Seu primeiro teste em Cypress
//
// Objetivo: entender a anatomia mínima de um teste.
//   describe -> agrupa testes (suíte)
//   it       -> um caso de teste individual
//   cy.*     -> comandos que interagem com a página
// ============================================================================

describe('Primeiro teste', () => {
  // beforeEach roda ANTES de cada `it`. Bom lugar para deixar a página
  // no estado inicial (evita repetir cy.visit em cada teste).
  beforeEach(() => {
    cy.visit('/') // usa a baseUrl definida no cypress.config.js
  })

  it('carrega a página e valida o título', () => {
    // Asserção sobre a URL atual
    cy.url().should('include', 'example.cypress.io')

    // Asserção sobre o conteúdo de um elemento (h1)
    cy.get('h1').should('contain.text', 'Kitchen Sink')
  })

  it('navega para a seção de comandos de Querying', () => {
    // A home repete o link "Querying" em vários lugares (menu + listas).
    // Pegamos só os visíveis e clicamos no primeiro.
    cy.get('a[href="/commands/querying"]:visible').first().click()

    // Confirma que a navegação aconteceu
    cy.url().should('include', '/commands/querying')
  })
})
