import { BasePage } from "./common/base_page";
import { LoginPage } from "./login_page";
import { LostPasswordTransfer } from "./lost_password_transfer";

export class LostPasswordPage extends BasePage {
  constructor() {
    super("module=users/restore_password");
    this.emailInput = ":nth-child(3) > .input-icon > .form-control";
    this.usernameInput = ":nth-child(2) > .input-icon > .form-control";
    this.sendButton = ".btn-info";
    this.backButton = "#back-btn";
  }

  clickBack() {
    cy.get(this.backButton).click();
    return new LoginPage();
  }

  typeEmail(email) {
    cy.get(this.emailInput).type(email);
    return this;
  }

  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  clickSend() {
    cy.get(this.sendButton).click();
    return new LoginPage();
  }

  // ? Bonusová metoda směřující na rozcestník
  clickSendTransfer() {
    cy.get(this.sendButton).click();
    return new LostPasswordTransfer();
  }
}
