import { customElement } from "../../helpers/custom_element";
import { DashboardPage } from "./dashboard_page";
import { LostPasswordPage } from "./lost_password_page";
import { ProjectsPage } from "./project_page";

export class LoginPage {
  constructor() {
    this.url = "https://tredgate.com/pmtool";
    this.usernameInput = customElement("#username");
    this.passwordInput = customElement("#password");
    this.loginButton = customElement(".btn");
    this.passwordForgottenAnchor = customElement("#forget_password");
    this.pageHeader = customElement("h3.form-title");
    this.logo = customElement(".login-page-logo img");
    this.rememberMeCheckbox = customElement(".checkbox");
    this.alertDiv = customElement(".alert");
  }

  openPmtool() {
    cy.visit(this.url);
    return this;
  }

  typeUsername(username) {
    this.usernameInput.type(username);
    return this;
  }

  typePassword(password) {
    this.passwordInput.type(password);
    return this;
  }

  clickLogin() {
    this.loginButton.click();
    return new DashboardPage();
  }

  login(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLogin();
    return new DashboardPage();
  }

  clickPasswordForgotten() {
    this.passwordForgottenAnchor.click();
    return new LostPasswordPage();
  }

  pageHeaderHasText(headerText) {
    this.pageHeader.haveText(headerText);
    return this;
  }
  // NOVÁ METODA pro kliknutí na Projects
  clickProjectLink() {
    cy.get("#Projects").click(); // nebo cy.contains("a", "Projects").click();
    return new ProjectsPage(); // konstruktor ověří nadpis
  }
}
