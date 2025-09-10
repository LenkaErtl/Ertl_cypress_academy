// api_tests.cy.js
// cypress/e2e/learning/api

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

  it("Login API Request have method POST", () => {
    cy.intercept("/auth/login").as("login_api");
    cy.visit("http://localhost:3001");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('[data-testid="log_in"]').click();
    // ? Použití metody its nám vytáhne požadovanou vlastnost a tu můžeme otestovat pomocí should
    cy.wait("@login_api").its("request.method").should("eq", "POST");
  });

  it("Login API More asserts in one API", () => {
    cy.intercept("/auth/login").as("login_api");
    cy.visit("http://localhost:3001");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('[data-testid="log_in"]').click();
    cy.wait("@login_api").then((req) => {
      // * Kontrola statusu
      expect(req.response.statusCode).to.equal(201);
      expect(req.response.statusMessage).to.equal("Created");

      // * Kontrola request.body
      expect(req.request.body).to.have.property("username");
      expect(req.request.body.username).to.equal(Cypress.env("tegb_username"));

      // * Kontrola response.body)
      expect(req.response.body).to.have.property("access_token");
      expect(typeof req.response.body.access_token).to.equal("string"); // ? Kontrolujeme, že access_token je text (string) pomocí klíčového slova typeof (vrátí datový typ hodnoty)
    });
  });

  it("Mocked API test", () => {
    cy.intercept("/auth/login").as("login_api");
    cy.intercept("/accounts/user/**", {
      fixture: "mock_accounts.json",
    }).as("accounts_api");
    cy.visit("http://localhost:3001");
    cy.get('[data-testid="username"]').type(Cypress.env("tegb_username"));
    cy.get('[data-testid="password"]').type(Cypress.env("tegb_password"));
    cy.get('[data-testid="log_in"]').click();
    cy.wait("@login_api");
    cy.get('[data-testid="accounts_section_link"]').click();
  });
});
