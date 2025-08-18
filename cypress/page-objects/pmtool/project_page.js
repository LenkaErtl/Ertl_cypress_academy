import { ProjectsPage } from "./project_page";

export class ProjectPage {
  constructor() {
    this.addProjectButton = 'button[data-testid="Add Project"]';
  }

  clickAddProject() {
    cy.get(this.addProjectButton).click();
    return new ProjectPage();
  }
}
