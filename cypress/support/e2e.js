// ***********************************************************
// Arquivo de suporte global dos testes E2E.
//
// O Cypress carrega ESTE arquivo automaticamente antes de
// CADA arquivo de spec. É o lugar ideal para:
//   - importar comandos customizados (commands.js)
//   - configurar comportamento global (ex.: ignorar erros da app)
//   - registrar hooks que valem para todos os testes
// ***********************************************************

// Importa os comandos customizados (cy.login, cy.getByData, etc.).
import './commands'

// Exemplo de configuração global comentada:
// Em sites de terceiros é comum haver erros de JS não relacionados ao teste.
// Descomente para evitar que esses erros derrubem o teste indevidamente.
//
// Cypress.on('uncaught:exception', () => {
//   return false
// })
