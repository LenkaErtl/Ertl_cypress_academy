import { LoginPage } from "../../page-objects/pmtool/login_page";
import { UsersPage } from "../../page-objects/pmtool/users_page";
import { DashboardPage } from "../../page-objects/pmtool/dashboard_page";
import { ProjectsPage } from "../../page-objects/pmtool/bonus_poly_project_page";

describe("BONUS: Polymorfismus", () => {
  it("Pmtool Login, Projects, Dashboard, Users, Logout", () => {
    // Login
    const loginPage = new LoginPage();
    loginPage
      .openPmtool()
      .login(Cypress.env("username"), Cypress.env("password"));

    // Kliknutí na Projects
    cy.get("#Projects").click();
    cy.url().should("include", "module=items/items&path=21");
    const projectsPage = new ProjectsPage(); // konstruktor ověří nadpis

    // Dashboard
    projectsPage.clickDashboardLink();
    cy.url().should("include", "module=dashboard/dashboard");
    const dashboardPage = new DashboardPage();

    // Users
    dashboardPage.clickUsersLink();
    cy.url().should("include", "module=items/items&path=1");
    const usersPage = new UsersPage();

    // Logout
    usersPage.clickProfile().clickLogout();
  });
});
