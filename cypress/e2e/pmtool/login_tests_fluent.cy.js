import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Fluent Login Tests", () => {
  it("Login to pmtool using Fluent API test", () => {
    new LoginPage()
      .openPmtool()
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
      .openPmtool()
      .clickPasswordForgotten()
      .clickSendTransfer()
      .onLostPasswordPage()
      .typeUsername("Testovací");
  });
});
