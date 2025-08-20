import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Mocha Tests", () => {
  beforeEach(() => {
    cy.log("Runs before every test");
    cy.viewport(800, 600);
  });

  it("Visit Pmtool", () => {
    new LoginPage().openPmtool();
  });

  it("Pmtool login", () => {
    new LoginPage()
      .openPmtool()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin();
  });

  afterEach(() => {
    cy.log("Runs after every test");
  });
});
