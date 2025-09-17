// operating_with_cypress_tests.cy.js
// cypress/e2e/learning/basics

describe("Operating with Cypress", () => {
  it("Login Test", () => {
    //it.only("Login Test", () => { // ? only spustí jen tento test - používat pouze pro vývoj
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
