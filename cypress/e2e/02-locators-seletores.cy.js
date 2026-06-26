/// <reference types="cypress" />

// ============================================================================
// POST 2 — Locators: como encontrar elementos (o coração do teste)
//
// A escolha do seletor define se o teste é estável ou frágil.
// Ordem de preferência recomendada pelo Cypress:
//
//   1. [data-cy="..."]   -> atributo dedicado a teste (MELHOR)
//   2. texto visível     -> cy.contains('Salvar')  (bom p/ UX)
//   3. atributos semânticos (role, aria, name)
//   4. classes/ids de CSS  -> EVITE (mudam com estilo)
//   5. seletores por estrutura (div > div > span) -> PIOR, muito frágil
// ============================================================================

describe('Locators / Seletores', () => {
  beforeEach(() => {
    cy.visit('/commands/querying')
  })

  it('cy.get() — seletor CSS', () => {
    // Funciona como document.querySelector: aceita qualquer seletor CSS.
    cy.get('#query-btn').should('contain', 'Button')
  })

  it('cy.contains() — busca por texto visível', () => {
    // Passando SELETOR + texto, retorna o elemento (a <ul>) que contém o texto.
    // Útil quando o texto é estável e significativo para o usuário.
    cy.contains('ul', 'oranges')
      .should('have.class', 'query-list')
  })

  it('escopo: encontrar dentro de um pai com .within()', () => {
    // .within() limita as buscas seguintes ao elemento atual.
    // Evita pegar um elemento parecido em outra parte da página.
    cy.get('.query-list').within(() => {
      cy.contains('bananas').should('have.class', 'third')
    })
  })

  it('filtrando uma coleção com .filter() e .eq()', () => {
    // cy.get pode retornar VÁRIOS elementos; aqui mostramos como refinar.
    cy.get('.query-list li')
      .should('have.length', 4) // a lista tem 4 itens
      .eq(1) // pega o segundo (índice começa em 0)
      .should('contain', 'oranges')
  })

  it('por atributo data-* (a prática recomendada)', () => {
    // O Kitchen Sink usa data-test-id nesta seção.
    // Em projetos reais, padronize UM atributo (ex.: data-cy) e use sempre.
    cy.get('[data-test-id="test-example"]')
      .should('have.class', 'example')
      .and('contain', 'Div with')
  })
})
