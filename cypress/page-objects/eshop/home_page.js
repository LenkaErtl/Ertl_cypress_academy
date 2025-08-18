export class HomePage {
  visit() {
    cy.visit("https://tredgate.com/eshop/");
  }

  openRegistration() {
    cy.contains("My Account").click();
    cy.contains("Register").click();
  }
}
