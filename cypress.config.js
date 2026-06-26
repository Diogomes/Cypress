const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // baseUrl evita repetir o domínio em cada cy.visit().
    // Trocamos para o "Kitchen Sink" oficial do Cypress: um app de prática
    // pensado para estudar comandos e seletores sem precisar subir nada local.
    baseUrl: 'https://example.cypress.io',

    // Onde ficam os arquivos de teste e qual padrão de nome é considerado spec.
    specPattern: 'cypress/e2e/**/*.cy.js',

    // Tempo padrão de espera por comandos/asserções (em ms).
    defaultCommandTimeout: 8000,

    // Tamanho da janela durante a execução — útil para gravar vídeos/screenshots
    // consistentes nos posts.
    viewportWidth: 1280,
    viewportHeight: 720,

    // Captura screenshot automaticamente quando um teste falha.
    screenshotOnRunFailure: true,

    // Vídeo desligado por padrão (deixa a execução local mais rápida).
    // Ligue quando quiser gerar material para o blog.
    video: false,

    setupNodeEvents(on, config) {
      // Aqui registramos plugins e eventos de Node (tasks, relatórios, etc.).
      // Mantido vazio por enquanto — ponto de extensão para posts futuros.
      return config
    },
  },
})
