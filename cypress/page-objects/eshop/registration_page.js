export class RegistrationPage {
  fillForm() {
    cy.get('input[name="firstname"]').type("Lenka");
    cy.get('input[name="lastname"]').type("Nováková");
    cy.get('input[name="email"]').type("dlellwwa@seznam.cz");
    cy.get('input[name="telephone"]').type("722569489");
    cy.get('input[name="password"]').type("TestPassword123");
    cy.get('input[name="confirm"]').type("TestPassword123");
  }

  agreeToPrivacyPolicy() {
    cy.get('input[type="checkbox"][name="agree"]').check();
  }

  submit() {
    cy.get(
      'input[type="submit"], button[type="submit"], input[value="Continue"]'
    ).click();
  }
}
