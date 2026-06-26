/// <reference types="cypress" />

// ============================================================================
// POST 7 — Comandos customizados e a estratégia data-cy
//
// Aqui usamos os comandos definidos em cypress/support/commands.js para
// mostrar como abstrair lógica repetida e deixar os testes legíveis.
// ============================================================================

describe('Comandos customizados', () => {
  beforeEach(() => {
    cy.visit('/commands/actions')
  })

  it('cy.preencher() — child command encadeável', () => {
    // Definido com { prevSubject: 'element' }: recebe o elemento anterior.
    cy.get('.action-email').preencher('texto@digitado.com')
    cy.get('.action-email').should('have.value', 'texto@digitado.com')
  })

  it('cy.login() — abstrai um fluxo (didático)', () => {
    // Não faz login real aqui (o Kitchen Sink não tem), mas demonstra o
    // padrão de centralizar fluxos comuns em um comando.
    cy.login('diogo@meublog.com', 'senha123')
  })

  // Nota sobre cy.getByData():
  // Em uma app SUA, adicione data-cy nos elementos importantes e use:
  //   cy.getByData('botao-salvar').click()
  // Assim o teste não quebra quando classe/estrutura mudam.
})
