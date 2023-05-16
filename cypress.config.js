const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

// module.exports = defineConfig({
//   reporter: 'cypress-mochawesome-reporter', // for html reports
//   e2e: {
    
//     "excludeSpecPattern": ['**/1-getting-started/*','**/2-advanced-examples/*'],
//     "chromeWebSecurity": false,
//     "watchForFileChanges": false, 
//     "exprimentalSessionSupport": true,
//     testIsolation: false,
//       setupNodeEvents(on, config) {
//           // on('file:preprocessor', webpackPreprocessor);
//           require('cypress-mochawesome-reporter/plugin')(on); // for html reports 
//           require('@shelex/cypress-allure-plugin')(on);
//           allureWriter(on, config);
//           return config;
//       }
//   },
// });

module.exports = defineConfig({
  e2e: {
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*'],
    chromeWebSecurity: false,
    watchForFileChanges: false,
    experimentalSessionSupport: true,
    testIsolation: false,
    setupNodeEvents(on, config) {
      // on('file:preprocessor', webpackPreprocessor);
      allureWriter(on, config);
      return config;
    },
  },
});
