/// <reference types="cypress" />

// ============================================================================
// POST 4 — Asserções: como validar o que esperamos
//
// Asserção é onde o teste "decide" se passou ou falhou.
// No Cypress elas têm RETENTABILIDADE: o comando .should() reexecuta
// automaticamente até passar ou estourar o timeout — isso elimina a
// maioria dos waits manuais e dos testes "flaky" (instáveis).
// ============================================================================

describe('Asserções', () => {
  beforeEach(() => {
    cy.visit('/commands/assertions')
  })

  it('asserções implícitas com .should()', () => {
    // A primeira linha do corpo da tabela tem o conteúdo padrão...
    cy.get('.assertion-table tbody tr')
      .first()
      .should('contain', 'Column content')

    // ...e existe exatamente uma linha marcada com a classe "success".
    cy.get('.assertion-table tbody tr.success')
      .should('have.length', 1)
      .and('have.class', 'success') // estado
  })

  it('múltiplas asserções encadeadas', () => {
    cy.get('.assertions-p p')
      .should('have.length', 3)
      .first()
      .and('contain', 'Some text from first p')
  })

  it('asserção explícita com expect() dentro de .then()', () => {
    // Quando você precisa de lógica/JS sobre o valor, use .then() + expect().
    cy.get('.assertions-p p').then(($paragraphs) => {
      // $paragraphs é um objeto jQuery — aqui saímos do "mundo Cypress"
      expect($paragraphs).to.have.length(3)
      expect($paragraphs.eq(0).text()).to.include('first p')
    })
  })

  it('asserção negativa', () => {
    cy.get('.assertion-table').should('not.have.class', 'erro')
  })
})
