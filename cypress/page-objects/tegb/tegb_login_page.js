import { customElement } from "../../helpers/custom_element.js";
import { DashboardPage } from "./dashboard_page.js";

export class TegBLoginPage {
  constructor() {
    this.url = "http://localhost:3001";
    this.usernameInput = customElement('[data-testid="username"]');
    this.passwordInput = customElement('[data-testid="password"]');
    this.loginButton = customElement('[data-testid="log_in"]');
    // ! Pokud voláme new TegBLoginPage opakovaně, dochází k duplicitnímu nastavení interceptu. Pokud to tak v testu máme, můžeme intercept přidat přímo do
    cy.intercept("/auth/login").as("login_api");
  }

  openTegb() {
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
    cy.wait("@login_api");
    return new DashboardPage();
  }

  login(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    return this.clickLogin();
  }
}
