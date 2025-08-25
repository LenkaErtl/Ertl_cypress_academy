/*
cypress/e2e/learning/advanced-features
aliases.cy.js
*/

describe("Using Aliases", () => {
  it("Checking login placeholders consistency", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username").invoke("attr", "placeholder").as("usernamePlaceholder");
    cy.get("#password").invoke("attr", "placeholder").as("passwordPlaceholder");
    cy.get("#forget_password").click();
    cy.get("#back-btn").click();
    cy.get("@usernamePlaceholder").then((placeholder) => {
      cy.log("Atribut username placeholder: " + placeholder);
      cy.get("#username").should("have.attr", "placeholder", placeholder);
    });
    cy.get("@passwordPlaceholder").then((placeholder) => {
      cy.get("#password").should("have.attr", "placeholder", placeholder);
    });
  });
});
