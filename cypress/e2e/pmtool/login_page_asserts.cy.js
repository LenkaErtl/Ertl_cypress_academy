import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Login Page Tests with Asserts", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  it("Page Header Has Text 'Login'", () => {
    new LoginPage().pageHeaderHasText("Login");
  });
});
