import { HeaderSection } from "./common/header_section";

export class UsersPage extends HeaderSection {
  constructor() {
    super("module=users/users");
    cy.get("h1").should("contain.text", "Users");
  }
}
