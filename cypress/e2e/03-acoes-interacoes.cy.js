/// <reference types="cypress" />

// ============================================================================
// POST 3 — Ações: interagindo com a página
//
// Comandos de ação simulam o usuário: digitar, clicar, marcar, selecionar.
// O Cypress espera o elemento ficar "acionável" (visível, habilitado, etc.)
// antes de agir — você raramente precisa de waits manuais.
// ============================================================================

describe('Ações e interações', () => {
  beforeEach(() => {
    cy.visit('/commands/actions')
  })

  it('.type() — digitar em um campo', () => {
    cy.get('.action-email')
      .type('contato@meublog.com')
      .should('have.value', 'contato@meublog.com')
  })

  it('.type() com teclas especiais', () => {
    // O Cypress entende sequências entre chaves: {selectall}, {backspace},
    // {enter}, {esc}, setas, etc. Aqui digitamos, selecionamos tudo e apagamos.
    cy.get('.action-email')
      .type('fake@email.com')
      .type('{selectall}{backspace}')
      .should('have.value', '')
  })

  it('.click() — clicar em um botão', () => {
    cy.get('.action-btn').click()
    // Depois de uma ação que re-renderiza a página, requisitamos o elemento
    // de novo para evitar o erro "elemento desanexado do DOM".
    cy.get('.action-btn').should('be.visible')
  })

  it('.check() / .select() — checkbox e dropdown', () => {
    // Marca um checkbox
    cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').first().check().should('be.checked')

    // Seleciona uma opção de um <select> pelo texto visível
    cy.get('.action-select').select('apples').should('have.value', 'fr-apples')
  })

  it('.clear() — limpar antes de redigitar', () => {
    cy.get('.action-email')
      .type('errado@email.com')
      .clear()
      .type('certo@email.com')
      .should('have.value', 'certo@email.com')
  })
})
