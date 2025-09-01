import { HeaderSection } from "./common/header_section.js";
import { LoginPage } from "./login_page.js";
import { ProjectPage } from "./project_page.js";

export class DashboardPage extends HeaderSection {
  constructor() {
    super("module=dashboard/dashboard");
    this.projectLink = "#Projects";
    this.welcomePageHeader = "#welcome-page-header";
    // ! Nemůžeme použít kvůli BasePage, pokud zavoláme visit(), potom ještě na HomePage nejsme a v rámci konstruktoru se nám již vyhodnotí assert, který spadne (protože jsme v aplikaci na jiné stránce)
    // cy.get(this.welcomePageHeader).should("be.visible");
    // * Možné řešení
    // if (!isPageDirectlyOpen) {
    //   cy.get(this.welcomePageHeader).should("be.visible");
    // }
  }
  welcomePageHeaderIsVisible() {
    cy.get(this.welcomePageHeader).should("be.visible");
  }
}
