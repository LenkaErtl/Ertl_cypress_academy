describe("Exercise: More Tabs Hack", () => {
  it("Webdriveruniversity remove target from anchor", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#login-portal")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#text").type("Something");
  });
});
