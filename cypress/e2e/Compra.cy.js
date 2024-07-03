describe('Testes na Amazon Brasil', () => {

    // Caso de teste 1
    it('Visita a página inicial e verifica o título', () => {
      cy.visit('https://www.amazon.com.br') // Visita a página inicial da Amazon Brasil
        .title().should('include', 'Amazon.com.br'); // Verifica se o título contém 'Amazon.com.br'
    });
  
    // Caso de teste 2
    it('Busca um produto e verifica os resultados', () => {
      cy.visit('https://www.amazon.com.br') // Visita a página inicial da Amazon Brasil
        .get('#twotabsearchtextbox') // Seleciona o campo de busca
        .type('Notebook') // Digita 'Notebook' no campo de busca
        .get('#nav-search-submit-button') // Seleciona o botão de busca
        .click() // Clica no botão de busca
        .get('.s-main-slot') // Seleciona o contêiner principal dos resultados
        .should('contain', 'Notebook'); // Verifica se os resultados contêm 'Notebook'
    });
  
    // Caso de teste 3
    it('Verifica a disponibilidade de um item específico', () => {
      cy.visit('https://www.amazon.com.br') // Visita a página inicial da Amazon Brasil
        .get('#twotabsearchtextbox') // Seleciona o campo de busca
        .type('Kindle Paperwhite') // Digita 'Kindle Paperwhite' no campo de busca
        .get('#nav-search-submit-button') // Seleciona o botão de busca
        .click() // Clica no botão de busca
        .get('.s-main-slot') // Seleciona o contêiner principal dos resultados
        .contains('Kindle Paperwhite') // Procura por um item específico
        .should('be.visible'); // Verifica se o item é visível
    });
  
    // Caso de teste 4
    // it('Simula o login', () => {
    //   cy.visit('https://www.amazon.com.br/ap/signin') // Visita a página de login da Amazon Brasil
    //     .get('#ap_email') // Seleciona o campo de email ou número de telefone
    //     .type('usuario_teste@teste.com') // Digita um email fictício
    //     .get('#continue') // Seleciona o botão de continuar
    //     .click() // Clica no botão de continuar
    //     .get('#ap_password') // Seleciona o campo de senha
    //     .type('senha_teste') // Digita uma senha fictícia
    //     .get('#signInSubmit') // Seleciona o botão de submissão
    //     .click() // Clica no botão de submissão
    //     .url().should('include', '/ap/signin'); // Verifica se a URL ainda inclui '/ap/signin' (porque não usamos credenciais reais)
    // });
  
  });
  