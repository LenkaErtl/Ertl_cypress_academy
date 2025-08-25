import { DashboardPage } from "./dashboard_page";

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
