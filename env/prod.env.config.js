const baseConfig = require("../cypress.config.js");

module.exports = {
  ...baseConfig,
  e2e: {
    ...baseConfig.e2e,
    env: {
      ...baseConfig.e2e.env,
      pmtool_url: "https://google.com",
      eshop_url: "https://seznam.cz",
      webtrain_url: "https://ministryoftesting.com",
      automation_test_store_url: "https://irozhlas.cz",
    },
  },
};

/*
/* Jednodušší cesta (přidávám proměnné mimo strukturu původního configu)
module.exports = {
  ...baseConfig,
  env: {
    someVar: "hodnota",
  },
};
*/
