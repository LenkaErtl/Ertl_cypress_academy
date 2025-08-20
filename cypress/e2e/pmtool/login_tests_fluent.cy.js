import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Fluent Login Tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });
  it("Login to pmtool using Fluent API test", () => {
    new LoginPage()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin()
      .clickProfile()
      .clickLogout()
      .clickPasswordForgotten()
      .typeEmail("test@tredgate.cz")
      .typeUsername("test")
      .clickSend();
  });

  it("Using transfer object", () => {
    new LoginPage()
      .clickPasswordForgotten()
      .clickSendTransfer()
      .onLostPasswordPage()
      .typeUsername("Testovací");
  });
  it("Open lost password and get back to login", () => {
    new LoginPage().clickPasswordForgotten().clickBack();
  });
});
