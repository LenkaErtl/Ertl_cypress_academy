describe("API Display Tests", () => {
  it("Check Login API", () => {
    cy.visit("http://localhost:3001");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('[data-testid="log_in"]').click();
  });

  it("Basic Intercept Test", () => {
    // ? Zapínáme odchytávání requestů (API - xhr), kterým url končí /auth/login a uložíme do aliasu se jménem "login_api"
    cy.intercept("/auth/login").as("login_api");
    cy.visit("http://localhost:3001");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('[data-testid="log_in"]').click();
  });

  it("Wait for Login", () => {
    cy.intercept("/auth/login").as("login_api");
    cy.visit("http://localhost:3001");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('[data-testid="log_in"]').click();
    // ? Počkáme na to, až se request login_api dokončí (přijde response)
    cy.wait("@login_api");
  });
});
