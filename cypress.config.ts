const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Dodaj tutaj konfiguracje zdarzeń, jeśli to konieczne
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Dopasowanie plików testowych
  },
});
