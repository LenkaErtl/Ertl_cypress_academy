import { DashboardPage } from "../../page-objects/pmtool/dashboard_page";
import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Page Objects: Login and Logout Tests", () => {
  it("Login to Pmtool", () => {
    const loginPage = new LoginPage();
    loginPage.openPmtool();
    loginPage.typeUsername("cypress_zima_2024");
    loginPage.typePassword("Zima2024Cypress");
    loginPage.clickLogin();
  });

  it("Login to Pmtool (group method)", () => {
    const loginPage = new LoginPage();

    loginPage.openPmtool();
    loginPage.login("Cypress_zima_2024", "Zima2024Cypress");
  });

  it("Pmtool Login and Logout Test", () => {
    const loginPage = new LoginPage();
    const dashboardPage = new DashboardPage();

    loginPage.openPmtool();
    loginPage.login("cypress_zima_2024", "Zima2024Cypress");
    dashboardPage.clickProfile();
    dashboardPage.clickLogout();
  });
});
