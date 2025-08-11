import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Exercise:using fluent API", () => {
  it("Lost Password E2E Test", () => {
    new LoginPage()
      .openPmtool()
      .clickPasswordForgotten()
      .typeEmail("lost_password@tredgate.cz")
      .typeUsername("lost_password_user")
      .clickSend();
  });

  it("Lost Password - back button", () => {
    new LoginPage().openPmtool().clickPasswordForgotten().clickBack();
  });
});
