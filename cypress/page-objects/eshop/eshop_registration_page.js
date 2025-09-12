// eshop_registration_page.js
// Page Object pro registrační stránku eshopu

export class EshopRegistrationPage {
  registerUser({ firstName, lastName, email, telephone, password }) {
    cy.get("#input-firstname").type(firstName);
    cy.get("#input-lastname").type(lastName);
    cy.get("#input-email").type(email);
    cy.get("#input-telephone").type(telephone);
    cy.get("#input-password").type(password);
    cy.get("#input-confirm").type(password);
    cy.get('input[type="checkbox"][name="agree"]').check(); // souhlas s podmínkami
    cy.get('input[type="submit"][value="Continue"]').click();

    // validace úspěšné registrace
    cy.location("pathname", { timeout: 60000 }).should(
      "include",
      "/account/success"
    );
    cy.contains("Your Account Has Been Created!").should("be.visible");

    return this;
  }
}
