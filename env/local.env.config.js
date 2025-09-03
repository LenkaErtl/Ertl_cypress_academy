const baseConfig = require("../cypress.config.js");

module.exports = {
  ...baseConfig,
  e2e: {
    ...baseConfig.e2e,
    env: {
      ...baseConfig.e2e.env,
      pmtool_url: "https://tredgate.com/pmtool",
      eshop_url: "https://tredgate.com/eshop",
      webtrain_url: "https://tredgate.com/webtrain",
      automation_test_store_url: "https://automationteststore.com/",
    },
  },
};
