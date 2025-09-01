import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Login Page Atomic Tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  context("Username Input Tests", () => {
    it("Username Input is Visible", () => {
      const loginPage = new LoginPage();
      cy.get(loginPage.usernameInput).should("be.visible");
    });

    it("Username have Placeholder", () => {
      const loginPage = new LoginPage();
      cy.get(loginPage.usernameInput).should(
        "have.attr",
        "placeholder",
        "Username"
      );
    });

    it("Username have value after type", () => {
      const loginPage = new LoginPage();
      cy.get(loginPage.usernameInput).type("Test").should("have.value", "Test");
    });
  });

  context("Logo Tests", () => {
    it("Logo is Visible", () => {
      const loginPage = new LoginPage();
      cy.get(loginPage.logo).should("be.visible");
    });
  });

  context("Password Input Tests", () => {
    it("Password is Visible", () => {
      const loginPage = new LoginPage();
      cy.get(loginPage.passwordInput).should("be.visible");
    });

    it("Password have Placeholder", () => {
      const loginPage = new LoginPage();
      cy.get(loginPage.passwordInput).should(
        "have.attr",
        "placeholder",
        "Password"
      );
    });
  });

  context("Remember Me Checkbox Tests", () => {
    it("Remember Me is Visible", () => {
      const loginPage = new LoginPage();
      cy.get(loginPage.rememberMeCheckbox).should("be.visible");
    });

    it("Remember Me have Text", () => {
      const loginPage = new LoginPage();
      cy.get(loginPage.rememberMeCheckbox).should(
        "contain.text",
        "Remember Me"
      );
    });
  });

  context("Login Button Tests", () => {
    it("Login Button is Visible", () => {
      const loginPage = new LoginPage();
      cy.get(loginPage.loginButton).should("be.visible");
    });

    it("Login Button have Text", () => {
      const loginPage = new LoginPage();
      cy.get(loginPage.loginButton).should("have.text", "Login");
    });
  });

  context("Password Forgotten Tests", () => {
    it("Password Forgotten is Visible", () => {
      const loginPage = new LoginPage();
      cy.get(loginPage.passwordForgottenAnchor).should("be.visible");
    });

    it("Password Forgotten have Text", () => {
      const loginPage = new LoginPage();
      cy.get(loginPage.passwordForgottenAnchor).should(
        "have.text",
        "Password forgotten?"
      );
    });
  });

  context("Title Tests", () => {
    it("Title is visible", () => {
      const loginPage = new LoginPage();
      cy.get(loginPage.pageHeader).should("be.visible");
    });

    it("Title have Text", () => {
      const loginPage = new LoginPage();
      cy.get(loginPage.pageHeader).should("have.text", "Login");
    });
  });

  context("Functionalities Tests", () => {
    it("Successful Login", () => {
      const loginPage = new LoginPage();
      loginPage
        .typeUsername(Cypress.env("pmtool_username"))
        .typePassword(Cypress.env("pmtool_password"))
        .clickLogin()
        .welcomePageHeaderIsVisible(); // ujisti se, že tahle metoda existuje
    });

    it("Unsuccessful Login", () => {
      const loginPage = new LoginPage();
      loginPage.typeUsername("ABCD").typePassword("EFGH").clickLogin();

      cy.get(loginPage.alertDiv).should("be.visible");
      cy.get(loginPage.alertDiv).should(
        "contain.text",
        "No match for Username and/or Password."
      );
    });
  });
});
