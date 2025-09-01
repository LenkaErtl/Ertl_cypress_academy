import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Login Page Atomic Tests", () => {
  let loginPage;

  beforeEach(() => {
    loginPage = new LoginPage();
    loginPage.openPmtool();
  });

  context("Kontrola placeholderů", () => {
    it("Username Input má placeholder 'Username'", () => {
      cy.get(loginPage.usernameInput).should(
        "have.attr",
        "placeholder",
        "Username"
      );
    });

    it("Password Input má placeholder 'Password'", () => {
      cy.get(loginPage.passwordInput).should(
        "have.attr",
        "placeholder",
        "Password"
      );
    });
  });

  context("Kontrola viditelnosti textů", () => {
    it("Text 'Remember Me' je viditelný", () => {
      cy.get(loginPage.rememberMeCheckbox)
        .should("be.visible")
        .and("include.text", "Remember Me");
    });

    it("Login tlačítko je viditelné a má text 'Login'", () => {
      cy.get(loginPage.loginButton)
        .should("be.visible")
        .and("have.text", "Login");
    });

    it("Password Forgotten odkaz je viditelný a má text 'Password forgotten?'", () => {
      cy.get(loginPage.passwordForgottenAnchor)
        .should("be.visible")
        .and("have.text", "Password forgotten?");
    });
  });

  context("Viditelnost loga", () => {
    it("Logo je viditelné", () => {
      cy.get(loginPage.logo).should("be.visible");
    });
  });
});
