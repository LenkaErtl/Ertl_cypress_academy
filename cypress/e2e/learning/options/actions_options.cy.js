// actions_options.cy.js
// cypress/e2e/learning/options

describe("Using Options in Cypress Actions", () => {
  it("Click, Type with options", () => {
    // ? Object literal - zjednodušené objekty pro práci s daty
    const userData = {
      username: "pepazdepa",
      email: "pepa@example.com",
      phone: "123456",
    };

    cy.log("Uživatelské jméno: " + userData.username);

    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username").type(userData.username, {
      delay: 2000, // 2000 ms = 2 sekundy mezi jednotlivými úhozy kláves
    });
    cy.get(".btn").click("topLeft", { force: true });
  });
});
