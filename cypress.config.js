const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      // ? Alternativa k cypress.env.json
      testVar: "Toto je proměnná",
      username: "cypress_zima_2024", // ✅ přidáno
      password: "Zima2024Cypress", // ✅ přidáno
      pmtool_url: "https://tredgate.com/pmtool",
      tegb_url: "http://localhost:3001/",
      tegb_api_url: "http://localhost:3000/",
      eshop_url: "https://tredgate.com/eshop",
      webtrain_url: "https://tredgate.com/webtrain",
      automation_test_store_url: "https://automationteststore.com/",
    },
    watchForFileChanges: false,
    defaultCommandTimeout: 10000,
  },
});
