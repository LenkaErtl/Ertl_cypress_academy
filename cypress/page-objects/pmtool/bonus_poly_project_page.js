import { HeaderSection } from "./common/header_section";

export class ProjectsPage extends HeaderSection {
  constructor() {
    super("module=projects/projects");
    cy.contains("span.title.level-0", "Projects", { timeout: 15000 }).should(
      "exist"
    );
  }
}
