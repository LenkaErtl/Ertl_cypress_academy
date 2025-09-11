import { HeaderSection } from "./common/header_section.js";
import { CreateNewProjectModal } from "./create_new_project_modal.js";

export class ProjectsPage extends HeaderSection {
  constructor() {
    super("module=items/items&path=21");
    this.addProjectButton = 'button[test_id="Add Project"]';

    // ✅ Ověření nadpisu "Projects" podle skutečného selektoru
    cy.contains("span.title.level-0", "Projects", { timeout: 15000 }).should(
      "exist"
    );
  }

  clickAddProject() {
    cy.get(this.addProjectButton).click();
    return new CreateNewProjectModal();
  }
}
