// operating_with_cypress_tests.cy.js
// cypress/e2e/learning/basics

describe("Operating with Cypress", () => {
  it.only("Login Test", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username").type("cypress_zima_2024");
    cy.get("#password").type("Zima2024Cypress");
    cy.get(".btn").click();
  });

  // ? it.skip - přeskakuje test při spuštění
  it.skip("Test failure - element not present", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username2").type("cypress_zima_2024");
  });
});

/*

Rozšiř náš test Login test v operating_with_cypress_tests.cy.js o vyplnění hesla (jakýkoliv text).

Heslo: Zima2024Cypress

*/
