describe("Exercise: operating with Cypress", () => {
  it("Lost Password Test", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#forget_password").click();
    cy.get(":nth-child(3) > .input-icon > .form-control").type(
      "test@tredgate.cz"
    );
    cy.get(":nth-child(2) > .input-icon > .form-control").type("test");
    cy.get(".btn-info").click();
  });
});
