// iframes.cy.js
// cypress/e2e/learning/cypress-hacks

describe("Handling IFrames", () => {
  it("Handle Tredgate WebTrain iframe", () => {
    cy.visit("https://tredgate.com/webtrain/web-actions.html");
    // cy.get("#name").type("Píšeme v iframe"); // ! Nebude fungovat, prvek je v iframe
    cy.get('[data-testid="test-automation-iframe"]').then((iframe) => {
      const body = iframe.contents().find("body"); // ? iframe - jquery HTML prvek, pomocí contents můžeme vytáhnout celý obsah jquery prvku a find mi v něm vyhledá a vytáhne HTML prvek pomocí CSS selektoru - v našem případě získáváme celý obsah iframe
      cy.wrap(body).as("iframeBody");
    });
    cy.get("@iframeBody").find("#name").type("Píšeme v iframe");
  });
});
