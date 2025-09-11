import { customElement } from "../../helpers/custom_element";
import { ProjectsTasksPage } from "./projects/projects_tasks_page";

export class CreateNewProjectModal {
  constructor() {
    this.projectNameInput = customElement('[data-testid="Name"] input');
    this.saveButton = customElement('button[type="submit"]');
    this.prioritySelect = customElement('div[data-testid="Priority"] select');
    this.statusSelect = customElement('div[data-testid="Status"] select');
    this.startDateInput = customElement('div[data-testid="Start Date"] input');
  }

  typeName(name) {
    this.projectNameInput.type(name);
    return this;
  }

  clickSave() {
    this.saveButton.click();
    return new ProjectsTasksPage();
  }

  selectPriority(priority) {
    this.prioritySelect.get().select(priority);
    return this;
  }

  selectStatus(status) {
    this.statusSelect.get().select(status);
    return this;
  }

  typeStartDate(startDate) {
    // ? Klikáme a mačkáme Escape z toho důvodu, že jinak se nám zobrazí kalendář, který v automatech mění startDate po uložení
    this.startDateInput.click().type("{esc}" + startDate);
    return this;
  }
}
