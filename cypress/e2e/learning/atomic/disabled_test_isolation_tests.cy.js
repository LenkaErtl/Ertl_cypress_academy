import { LoginPage } from "../../../page-objects/pmtool/login_page";
import { UsersPage } from "../../../page-objects/pmtool/users_page";

describe("Disabled Test Isolation", { testIsolation: false }, () => {
  const usersPage = new UsersPage();

  // ? Namísto beforeEach používáme before (chceme se přihlásit jen před prvním testem)
  before(() => {
    // ? Před začátkem testů musíme vyčistit Cypress data a cache, jinak se nám díky vypnuté izolaci mohou do testu dostat data nebo stránky z předchozích testů.
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
