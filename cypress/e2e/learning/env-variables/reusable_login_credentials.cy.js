import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Reusable, Secure credentials - Cypress.env", () => {
  it("Pmtool Login and Logout", () => {
    const username = Cypress.env("pmtool_username");
    const password = Cypress.env("pmtool_password");

    new LoginPage()
      .openPmtool()
      .login(username, password)
      .clickProfile()
      .clickLogout();

    cy.log(Cypress.env("testVar"));
  });
});
