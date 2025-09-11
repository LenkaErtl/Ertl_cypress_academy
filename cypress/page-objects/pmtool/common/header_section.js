import { MenuSection } from "./menu_section.js";
import { LoginPage } from "../login_page.js";
import { DashboardPage } from "../dashboard_page.js";

export class HeaderSection extends MenuSection {
  constructor(path = "") {
    super(path);
    this.profileButton = "#user_dropdown";
    this.logoutButton = "#logout";
    this.logoSelector = "#logo > a > img";
    this.usersLink = "#Users > a"; // přidáno
    this.dashboardLink = "#dashboard"; // přidáno
  }

  clickProfile() {
    cy.get(this.profileButton).click();
    return this;
  }

  clickLogout() {
    cy.get(this.logoutButton).click();
    return new LoginPage();
  }

  clickLogo() {
    const { HomePage } = require("../../eshop/home_page");
    cy.get(this.logoSelector).click();
    return new HomePage();
  }

  clickUsersLink() {
    const { UsersPage } = require("../users_page.js");
    cy.contains("a", "Users").click();
    return new UsersPage();
  }

  clickDashboardLink() {
    cy.get(this.dashboardLink).click();
    return new DashboardPage();
  }
}
