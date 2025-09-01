import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Exercise: Disabled isolation", { testIsolation: false }, () => {
  before(() => {
    // ? Namísto beforeEach používáme before (chceme se přihlásit jen před prvním testem)
    // ? Před začátkem testů musíme vyčistit Cypress data a cache, jinak se nám díky vypnuté izolaci mohou do testu dostat data nebo stránky z předchozích testů.
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    new LoginPage().openPmtool();
  });

  context("Username Input Tests", () => {
    it("Username Input is Visible", () => {
      const loginPage = new LoginPage();
      loginPage.usernameInput.isVisible();
    });

    it("Username have Placeholder", () => {
      const loginPage = new LoginPage();
      loginPage.usernameInput.havePlaceholder("Username");
    });

    it("Username have value after type", () => {
      const loginPage = new LoginPage();
      loginPage.usernameInput.type("Test").haveValue("Test");
    });
  });

  context("Logo Tests", () => {
    it("Logo is Visible", () => {
      const loginPage = new LoginPage();
      loginPage.logo.isVisible();
    });
  });

  context("Password Input Tests", () => {
    it("Password is Visible", () => {
      const loginPage = new LoginPage();
      loginPage.passwordInput.isVisible();
    });

    it("Password have Placeholder", () => {
      const loginPage = new LoginPage();
      loginPage.passwordInput.havePlaceholder("Password");
    });
  });

  context("Remember Me Checkbox Tests", () => {
    it("Remember Me is Visible", () => {
      const loginPage = new LoginPage();
      loginPage.rememberMeCheckbox.isVisible();
    });

    it("Remember Me have Text", () => {
      const loginPage = new LoginPage();
      loginPage.rememberMeCheckbox.containsText("Remember Me");
    });
  });

  context("Login Button Tests", () => {
    it("Login Button is Visible", () => {
      const loginPage = new LoginPage();
      loginPage.loginButton.isVisible();
    });

    it("Login Button have Text", () => {
      const loginPage = new LoginPage();
      loginPage.loginButton.haveText("Login");
    });
  });

  context("Password Forgotten Tests", () => {
    it("Password Forgotten is Visible", () => {
      const loginPage = new LoginPage();
      loginPage.passwordForgottenAnchor.isVisible();
    });

    it("Password Forgotten have Text", () => {
      const loginPage = new LoginPage();
      loginPage.passwordForgottenAnchor.haveText("Password forgotten?");
    });
  });

  context("Title Tests", () => {
    it("Title is visible", () => {
      const loginPage = new LoginPage();
      loginPage.pageHeader.isVisible();
    });

    it("Title have Text", () => {
      const loginPage = new LoginPage();
      loginPage.pageHeader.haveText("Login");
    });
  });

  context("Functionalities Tests", () => {
    it("Successful Login", () => {
      const loginPage = new LoginPage();
      cy.get("#username").clear();
      loginPage
        .typeUsername(Cypress.env("pmtool_username"))
        .typePassword(Cypress.env("pmtool_password"))
        .clickLogin()
        .welcomePageHeaderIsVisible();
    });

    it("Unsuccessful Login", () => {
      cy.clearAllCookies();
      cy.clearAllLocalStorage();
      cy.clearAllSessionStorage();
      const loginPage = new LoginPage();
      loginPage.openPmtool();
      cy.get("#username").should("be.visible");
      loginPage.typeUsername("ABCD").typePassword("EFGH").clickLogin();
      loginPage.alertDiv.isVisible();
      loginPage.alertDiv.containsText("No match for Username and/or Password.");
    });
  });
});
