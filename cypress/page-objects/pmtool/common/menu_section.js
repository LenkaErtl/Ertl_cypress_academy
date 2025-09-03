import { BasePage } from "./base_page.js";

export class MenuSection extends BasePage {
  constructor(path = "") {
    super(path);
    this.projectLink = "#Projects";
    this.dashboardLink = "#dashboard";
  }

  clickProjectLink() {
    // ? Lazy Loading, vyvarovává se cross-reference chybě
    const { ProjectsPage } = require("../project_page.js");
    cy.get(this.projectLink).click();
    return new ProjectsPage();
  }

  clickDashboard() {
    const { DashboardPage } = require("../dashboard_page.js");
    cy.get(this.dashboardLink).click();
    return new DashboardPage();
  }
}
