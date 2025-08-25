/*
cypress/e2e/learning/debugging
debug.cy.js
*/

describe("Cypress Debugging", () => {
  it("Using Debug Mode in Cypress", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username").type("cypress_zima_2024").debug(); // ! Neměl by se dostat go Gitu
    cy.get("#password").type("Zima2024Cypress");
    cy.get(".btn").debug().click();
  });

  it.skip("Using pause() method", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username").type("cypress_zima_2024").pause(); // ! Pause se NIKDY nesmí dostat do gitu - rozbije vzdálené běhy testů
    cy.get("#password").type("Zima2024Cypress");
    cy.get(".btn").pause().click();
  });
});
