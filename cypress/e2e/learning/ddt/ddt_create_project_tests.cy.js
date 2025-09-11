// ddt_create_project_tests.cy.js
// cypress/e2e/learning/ddt

import moment from "moment";
import projectsData from "../../../fixtures/new_project_data.json";
import { faker } from "@faker-js/faker";
import { LoginPage } from "../../../page-objects/pmtool/login_page.js";

describe("Data Driven Tests", () => {
  projectsData.forEach((projectData) => {
    it(`DDT: Create Project - ${projectData.description}`, () => {
      const projectName =
        projectData.name_prefix + faker.number.int({ max: 999999 });
      const startDate = getStartDate(projectData.start_date, "YYYY-MM-DD");
      const startDateProjectInfo = getStartDate(
        projectData.start_date,
        "DD/MM/YYYY"
      );
      const dateAdded = moment().format("DD/MM/YYYY");
      cy.log("Project name: " + projectName);
      cy.log("Start date: " + startDate);
      cy.log("Start date for Project Info assert: " + startDateProjectInfo);
      cy.log("Date added: " + dateAdded);

      new LoginPage()
        .openPmtool()
        .login(Cypress.env("pmtool_username"), Cypress.env("pmtool_password"))
        .clickProjectLink()
        .clickAddProject()
        .typeName(projectName)
        .typeStartDate(startDate)
        .selectPriority(projectData.priority)
        .selectStatus(projectData.status)
        .clickSave()
        .clickProjectInfo()
        .projectInfoChecks(
          projectName,
          projectData.status,
          projectData.priority,
          dateAdded,
          startDateProjectInfo
        );
    });
  });
});

function getStartDate(startDate, format) {
  let generatedStartDate = "$INVALID_DATE";
  switch (startDate) {
    case "today":
      generatedStartDate = moment().format(format);
      break;
    case "tomorrow":
      generatedStartDate = moment().add(1, "day").format(format);
      break;
    case "yesterday":
      generatedStartDate = moment().subtract(1, "day").format(format);
      break;
    default:
      throw new Error(
        "Innvalid start_date. Valid values: 'today', 'tomorrow', 'yesterday'"
      );
  }
  return generatedStartDate;
}

/* 
* TODO vytváření ddt:
//0. Vytvoření a úprava PageObjectů pro vytvoření a kontrolu projektu
// 1. Vytvoření JSON souboru s daty pro testy
//2. V testu importovat JSON
//3. Vytvoření cyklu z importovaných dat
//4. Dynamické vytvoření testů
5. Vytvoření projectName
6. Vytvoření datumů pro testy
7. Testovací kroky
8. Testy spustíme a opravíme případné chyby

*/
