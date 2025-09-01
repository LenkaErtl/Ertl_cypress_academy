import { LoginPage } from "../../../page-objects/pmtool/login_page.js";
import { UsersPage } from "../../../page-objects/pmtool/users_page.js";

describe("Users Page Atomic Tests", () => {
  const usersPage = new UsersPage();

  beforeEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    new LoginPage().openPmtool().login("cypress_zima_2024", "Zima2024Cypress");
    new UsersPage().visit();
  });

  context("Title Tests", () => {
    it("Title is visible", () => {
      usersPage.pageTitleHeader.isVisible();
    });

    it("Title have Text", () => {
      usersPage.pageTitleHeader.haveText("Users");
    });
  });

  context("Add User Button Tests", () => {
    it("Add User Button is Visible", () => {
      usersPage.addUserButton.isVisible();
    });

    it("Add User Button have Text", () => {
      usersPage.addUserButton.haveText("Add User");
    });
  });
});
