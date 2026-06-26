/// <reference types="cypress" />

// ============================================================================
// POST 5 — Fixtures: separando dados de teste do código
//
// Fixtures são arquivos (geralmente JSON) em cypress/fixtures/.
// Servem para guardar massa de dados reutilizável: usuários, payloads de
// API, textos. Mantém o teste limpo e os dados em um só lugar.
// ============================================================================

describe('Fixtures e dados', () => {
  it('carrega um fixture com cy.fixture()', () => {
    cy.fixture('usuario').then((usuario) => {
      // `usuario` é o conteúdo de cypress/fixtures/usuario.json
      expect(usuario.nome).to.eq('Diogo')
      expect(usuario.email).to.contain('@')
    })
  })

  it('usa o fixture para preencher um formulário', () => {
    cy.visit('/commands/actions')

    cy.fixture('usuario').then((usuario) => {
      cy.get('.action-email')
        .type(usuario.email)
        .should('have.value', usuario.email)
    })
  })

  // Padrão data-driven: rodar o MESMO teste para vários conjuntos de dados.
  const cenarios = [
    { entrada: 'teste@dominio.com', valido: true },
    { entrada: 'email-invalido', valido: false },
  ]

  cenarios.forEach(({ entrada, valido }) => {
    it(`valida e-mail "${entrada}" (válido=${valido})`, () => {
      cy.visit('/commands/actions')
      cy.get('.action-email').type(entrada)
      // Asserção simples só para ilustrar o loop de cenários:
      cy.get('.action-email').should('have.value', entrada)
    })
  })
})
