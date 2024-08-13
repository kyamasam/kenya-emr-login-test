module.exports = {
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    baseUrl:'https://qa.kenyahmis.org/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
};
