import { HeaderSection } from "../common/header_section.js";

export class ProjectsTasksPage extends HeaderSection {
  constructor(projectId = "") {
    super(`module=items/items&path=21-${projectId}/22`);
  }
}
