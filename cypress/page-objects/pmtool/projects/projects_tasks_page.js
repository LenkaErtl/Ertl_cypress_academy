import { HeaderSection } from "../common/header_section";

export class ProjectsTasksPage extends HeaderSection {
  constructor(projectId = "") {
    this.pageHeader = ".page-header";
    super(`module=items/items&path=21-${projectId}/22`);
  }
}