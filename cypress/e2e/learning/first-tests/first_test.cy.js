// first_test.cy.js
// cypress/e2e/learning/first-tests

// ? dsb - zkratka pro vytvoření describe
describe("Můj první test", () => {
  it("Otevři tredgate.com/pmtool", () => {
    cy.visit("https://tredgate.com/pmtool");
  });
});
