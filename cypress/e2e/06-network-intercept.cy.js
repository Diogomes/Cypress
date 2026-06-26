/// <reference types="cypress" />

// ============================================================================
// POST 6 — Network: espionando e simulando requisições com cy.intercept()
//
// cy.intercept() permite:
//   - ESPIONAR (spy): observar uma chamada de rede e esperar por ela
//   - SIMULAR (stub): devolver uma resposta fake, sem depender do backend
//
// Isso deixa os testes rápidos, determinísticos e independentes da API real.
// ============================================================================

describe('Network / cy.intercept()', () => {
  it('espiona uma requisição e espera por ela (alias com @)', () => {
    // Registra o intercept ANTES da ação que dispara a chamada.
    cy.intercept('GET', '**/comments/*').as('getComment')

    cy.visit('/commands/network-requests')
    cy.get('.network-btn').click()

    // cy.wait('@alias') pausa até a chamada acontecer e expõe a resposta.
    cy.wait('@getComment').its('response.statusCode').should('eq', 200)
  })

  it('simula (stub) uma resposta da API', () => {
    // Aqui devolvemos um corpo fixo — o backend real nem é chamado.
    cy.intercept('POST', '**/comments', {
      statusCode: 201,
      body: { id: 999, mensagem: 'comentário fake do teste' },
    }).as('postComment')

    cy.visit('/commands/network-requests')
    cy.get('.network-post').click()

    cy.wait('@postComment').then(({ response }) => {
      expect(response.statusCode).to.eq(201)
      expect(response.body).to.have.property('id', 999)
    })
  })
})
