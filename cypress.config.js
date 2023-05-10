const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //for html reports
  reporterOptions: {
    reportPageTitle: 'Automation Pratice Report',
    embeddedScreenshots: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    viewportWidth: 1000,
    viewportHeight: 660,
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 30000,
    baseUrl: "https://practice.automationtesting.in/" 
  },
})