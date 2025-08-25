import { HeaderSection } from "./common/header_section.js";
import { CreateNewProjectModal } from "./create_new_project_modal.js";

export class ProjectsPage extends HeaderSection {
  constructor() {
    super();
    this.addProjectButton = 'button[test_id="Add Project"]';
  }

  clickAddProject() {
    cy.get(this.addProjectButton).click();
    return new CreateNewProjectModal();
  }
}
