describe("Tab Hack Checks", () => {
  it("Modify Anchor to Open Page in The Same Screen", () => {
    cy.visit("https://tredgate.com/webtrain/web-actions.html");
    // cy.get('[data-testid="new-tab-link"]').click(); // ! Nebude fungovat, protože odkaz otevírá nové okno
    cy.get('[data-testid="new-tab-link"]') // ? Get v případě odstraňování otevírání v novém okně vždy musí směrovat na prvek <a>, který má v sobě atribut target
      .invoke("removeAttr", "target") // ? Odstraní atribut target z prvku, který je zodpovědný za otevírání odkazu v novém okně.
      .click({ force: true }); // ? Pokud bychom nepoužili force: true, Cypress nám odmítne na prvek kliknout (protože je změněný oproti původnímu stavu při použití metody get())
    cy.get("#name").type("Vyplnění textu");
  });
});
