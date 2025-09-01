import { DashboardPage } from "./dashboard_page";
import { LostPasswordPage } from "./lost_password_page";

export class LoginPage {
  constructor() {
    this.url = "https://tredgate.com/pmtool";
    this.usernameInput = "#username";
    this.passwordInput = "#password";
    this.loginButton = ".btn";
    this.passwordForgottenAnchor = "#forget_password";
    this.pageHeader = "h3.form-title";
    this.logo = ".login-page-logo img";
    this.rememberMeCheckbox = ".checkbox";
    this.alertDiv = ".alert";
  }

  openPmtool() {
    cy.visit(this.url);
    return this;
  }

  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }
  clickLogin() {
    cy.get(this.loginButton).click();
    return new DashboardPage();
  }

  login(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLogin();
    return new DashboardPage();
  }

  clickPasswordForgotten() {
    cy.get(this.passwordForgottenAnchor).click();
    return new LostPasswordPage();
  }
  pageHeaderHasText(headerText) {
    cy.get(this.pageHeader).should("have.text", headerText);
    return this;
  }
}
