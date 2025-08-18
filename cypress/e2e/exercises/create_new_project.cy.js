import { LoginPage } from "../../page-objects/pmtool/login_page";
import { DashboardPage } from "../../page-objects/pmtool/dashboard_page";
import { ProjectsPage } from "../../page-objects/pmtool/project_page";

export class CreateNewProjectModal {
  constructor() {
    this.projectNameInput = '[data-testid="Name"] input';
    this.saveButton = 'button[type="submit"]';
  }

  typeName(name) {
    cy.get(this.projectNameInput).type(name);
    return this;
  }

  clickSave() {
    cy.get(this.saveButton).click();
    return new DashboardPage();
  }
}

describe("CSS Selectors exercise", () => {
  it("Create new projects with selectors", () => {
    new LoginPage()
      .openPmtool()
      .login("cypress_zima_2024", "Zima2024Cypress")
      .clickProjectLink();
  });
});
