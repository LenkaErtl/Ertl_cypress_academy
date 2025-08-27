// mouse_actions_tests.cy.js
// cypress/e2e/mouse-actions

describe("Mouse Actions Tests", () => {
  it("Scroll Into View", () => {
    cy.visit("https://tredgate.com/webtrain/index.html");
    cy.get("#users_table_2").scrollIntoView().should("be.visible");
  });
  it("Double Click Test", () => {
    cy.visit("https://tredgate.com/webtrain/web-actions.html");
    cy.get('[data-testid="double-click-box"]').dblclick();
  });
  it("Click and Hold Test", () => {
    cy.visit("https://tredgate.com/webtrain/web-actions.html");
    cy.get(".hold-button").trigger("mousedown");
    cy.wait(1500);
    cy.get(".hold-button").trigger("mouseup");
  });
  it("Drag and Drop", () => {
    cy.visit("https://webdriveruniversity.com/Actions/index.html");
    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable", {})
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
  });
  it("Real Hover Test", () => {
    cy.visit("https://tredgate.com/webtrain/web-actions.html");
    cy.get('[data-testid="hover-box"]')
      .realHover()
      .then(() => {
        cy.wait(2000);
        cy.get('[data-testid="hover-message"]').should("be.visible");
      });
  });
});
