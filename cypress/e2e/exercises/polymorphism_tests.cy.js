import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Exercise: Using Polymorphism", () => {
  it("Pmtool Login, Open Projects, Logout", () => {
    new LoginPage()
      .openPmtool()
      .login("cypress_zima_2024", "Zima2024Cypress")
      .clickProjectLink()
      .clickProfile()
      .clickLogout();
  });
});
