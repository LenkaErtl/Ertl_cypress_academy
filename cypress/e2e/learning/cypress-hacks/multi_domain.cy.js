describe("Multi Domain Test", () => {
  it("cy.origin Test", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username").type("TEST");
    cy.origin("https://tegb-frontend-88542200c6db.herokuapp.com/", () => {
      cy.visit("/");
      cy.get('[data-testid="username-input"]').type("Druhá doména");
    });
  });

  it.only("Using imports in cy.origin", () => {
    cy.visit("https://tegb-frontend-88542200c6db.herokuapp.com/");
    cy.get('[data-testid="username-input"]').type("První doména");

    cy.origin("https://tredgate.com/pmtool", () => {
      cy.visit("/");
      // ! cy.origin nepodporuje používání externích souborů (PageObjects, npm balíčky jako je moment nebo faker) - někdy nám pomůže přímo Cypress.require, ale není to na 100 %
      // ? Dokumentace:
      const fakerModule = Cypress.require("@faker-js/faker");
      const faker = fakerModule.faker;
      cy.get("#username").type(faker.internet.username());
    });
  });
});
