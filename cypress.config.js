const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.apollo.ee',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    viewportWidth: 1440,
    viewportHeight: 1000,
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 120000,
    requestTimeout: 30000,
    responseTimeout: 30000,
    retries: {
      runMode: 2,
      openMode: 1,
    },
    video: false,
    screenshotOnRunFailure: true,
  },
});
