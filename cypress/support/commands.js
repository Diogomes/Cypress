// ***********************************************************
// Comandos customizados (Custom Commands)
//
// Comandos customizados encapsulam ações repetidas em um nome
// reutilizável: cy.meuComando(). Isso deixa os testes mais
// legíveis e centraliza a manutenção.
//
// Sintaxe: Cypress.Commands.add('nome', (args) => { ... })
// ***********************************************************

// --- Comando 1: seletor por atributo de teste -------------------------------
// A MELHOR prática de locator no Cypress é usar um atributo dedicado a testes,
// como data-cy / data-test / data-testid. Ele não muda quando o CSS ou o texto
// muda, então o teste fica resistente a refatorações de layout.
//
// Uso: cy.getByData('submit')  ->  procura [data-cy="submit"]
Cypress.Commands.add('getByData', (selector) => {
  return cy.get(`[data-cy="${selector}"]`)
})

// --- Comando 2: exemplo de fluxo de login (didático) ------------------------
// Mostra como abstrair um fluxo comum. Aqui é apenas ilustrativo, pois o
// Kitchen Sink não tem login real. Em um projeto real, este comando faria
// a requisição/preenchimento de formulário uma única vez.
Cypress.Commands.add('login', (usuario, senha) => {
  cy.log(`Fazendo login como **${usuario}**`)
  // Exemplo via UI:
  //   cy.visit('/login')
  //   cy.getByData('email').type(usuario)
  //   cy.getByData('password').type(senha, { log: false })
  //   cy.getByData('submit').click()
})

// --- Comando 3: child command (encadeável a partir de um elemento) ----------
// { prevSubject: 'element' } faz o comando receber o elemento anterior da
// cadeia. Uso: cy.get('input').preencher('texto')
Cypress.Commands.add('preencher', { prevSubject: 'element' }, (subject, valor) => {
  cy.wrap(subject).clear().type(valor)
})
