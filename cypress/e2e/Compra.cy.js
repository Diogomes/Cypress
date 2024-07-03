describe('Testes na Amazon Brasil', () => {

  it('Visita a página inicial e verifica o título', () => {
    cy.visit('https://www.amazon.com.br')
      .title().should('include', 'Amazon.com.br');
  });

  it('Busca um produto e verifica os resultados', () => {
    cy.visit('https://www.amazon.com.br')
      .get('#twotabsearchtextbox')
      .type('Notebook')
      .get('#nav-search-submit-button')
      .click()
      .get('.s-main-slot')
      .should('contain', 'Notebook');
  });

  it('Verifica a disponibilidade de um item específico', () => {
    cy.visit('https://www.amazon.com.br')
      .get('#twotabsearchtextbox')
      .type('Kindle Paperwhite')
      .get('#nav-search-submit-button')
      .click()
      .get('.s-main-slot')
      .contains('Kindle Paperwhite')
      .should('be.visible');
  });

  it('Simula o login', () => {
    cy.visit('https://www.amazon.com.br/ap/signin')
      .get('#ap_email')
      .type('usuario_teste@teste.com')
      .get('#continue')
      .click()
      .get('#ap_password')
      .type('senha_teste')
      .get('#signInSubmit')
      .click()
      .url().should('include', '/ap/signin');
  });

  it('Adiciona um item ao carrinho', () => {
    cy.visit('https://www.amazon.com.br')
      .get('#twotabsearchtextbox')
      .type('Echo Dot')
      .get('#nav-search-submit-button')
      .click()
      .get('.s-main-slot').contains('Echo Dot').click()
      .get('#add-to-cart-button')
      .click()
      .get('.a-size-medium-plus')
      .should('contain', 'Adicionado ao carrinho');
  });

  it('Verifica promoções na página inicial', () => {
    cy.visit('https://www.amazon.com.br')
      .get('#gw-desktop-herotator')
      .should('be.visible');
  });

  it('Navega por categorias', () => {
    cy.visit('https://www.amazon.com.br')
      .get('#nav-hamburger-menu')
      .click()
      .get('.hmenu-visible').contains('Computadores e Informática').click()
      .url().should('include', 'computadores-informatica');
  });

  it('Verifica a página de detalhes de um produto', () => {
    cy.visit('https://www.amazon.com.br')
      .get('#twotabsearchtextbox')
      .type('Monitor Samsung')
      .get('#nav-search-submit-button')
      .click()
      .get('.s-main-slot').contains('Monitor Samsung').click()
      .get('#productTitle')
      .should('contain', 'Monitor Samsung');
  });

});
