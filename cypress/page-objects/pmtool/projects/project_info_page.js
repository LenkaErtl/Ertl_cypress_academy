// project_info_page.js
// cypress/page-objects/pmtool/projects

import { customElement } from "../../../helpers/custom_element";
import { HeaderSection } from "../common/header_section";

export class ProjectInfoPage extends HeaderSection {
  constructor(projectId = "") {
    super(`module=items/info&path=21-${projectId}`);
    // ! customElement není přizpůsobený na Xpath, nemůžeme jej použít
    this.priorityTdXpath = '//th[text()="Priority"]/..//div';
    this.statusTdXpath = '//th[text()="Status"]/..//div';
    this.startDateTdXpath = '//th[text()="Start Date"]/../td';
    this.dateAddedTdXpath = '//th[text()="Date Added"]/../td';
    this.projectNameTitleDiv = customElement(".portlet-title .caption");
  }

  // ! Slučovací metody bez ovládacích metod je doporučené vytvářet jen pokud jde o asserty
  projectInfoChecks(projectName, status, priority, dateAdded, startDate) {
    this.projectNameTitleDiv.containsText(projectName);
    cy.xpath(this.priorityTdXpath).should("have.text", priority);
    cy.xpath(this.statusTdXpath).should("have.text", status);
    cy.xpath(this.startDateTdXpath).should("have.text", startDate);
    cy.xpath(this.dateAddedTdXpath).should("contain.text", dateAdded);
    return this;
  }
}
