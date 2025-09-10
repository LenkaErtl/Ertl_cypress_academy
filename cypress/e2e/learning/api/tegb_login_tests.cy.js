import { TegBLoginPage } from "../../../page-objects/tegb/tegb_login_page";

describe("Tegb Accounts Tests", () => {
  it("Login and Open Accounts", () => {
    new TegBLoginPage()
      .openTegb()
      .typeUsername(Cypress.env("tegb_username"))
      .typePassword(Cypress.env("tegb_password"))
      .clickLogin()
      .openAccounts()
      .titleHaveText("Account");
  });
});
