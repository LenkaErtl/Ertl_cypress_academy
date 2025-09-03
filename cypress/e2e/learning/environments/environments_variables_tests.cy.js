describe("More Test Environments Tests", () => {
  it("Open Pmtool", () => {
    cy.visit(Cypress.env("pmtool_url"));
  });

  it("Open Eshop", () => {
    cy.visit(Cypress.env("eshop_url"));
  });

  it("Open AutomationTestStore", () => {
    cy.visit(Cypress.env("automation_test_store_url"));
  });

  it("Open WebTrain", () => {
    cy.visit(Cypress.env("webtrain_url"));
  });
});
