export class LostPasswordPage {
  constructor() {
    this.emailInput = ":nth-child(3) > .input-icon > .form-control";
    this.usernameInput = ":nth-child(2) > .input-icon > .form-control";
    this.sendButton = ".btn-info";
  }

  typeEmail(email) {
    cy.get(this.emailInput).type(email);
  }

  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
  }

  clickSend() {
    cy.get(this.sendButton).click();
  }
}
