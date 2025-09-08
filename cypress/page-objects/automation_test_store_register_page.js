export class AutomationTestStoreRegisterPage {
  openHomePage() {
    cy.visit("https://automationteststore.com");
    return this;
  }

  clickLoginOrRegister() {
    cy.contains("Login or register").click(); // název jen a malým r ne s velkým Register
    return this;
  }

  clickContinueToForm() {
    cy.get('button[title="Continue"]').click();
    return this;
  }

  fillRegistrationForm(user) {
    cy.get("#AccountFrm_firstname").type(user.firstName);
    cy.get("#AccountFrm_lastname").type(user.lastName);
    cy.get("#AccountFrm_email").type(user.email);
    cy.get("#AccountFrm_telephone").type(user.telephone);
    cy.get("#AccountFrm_address_1").type(user.address);
    cy.get("#AccountFrm_city").type(user.city);
    cy.get("#AccountFrm_postcode").type(user.zip);
    cy.get("#AccountFrm_country_id").select("Czech Republic");
    cy.wait(1000);
    cy.get("#AccountFrm_zone_id").select("Vysocina"); //místo Vysočina je Vysocina
    cy.get("#AccountFrm_newsletter0").check();
    cy.get("#AccountFrm_loginname").type(user.loginname);
    cy.get("#AccountFrm_password").type(user.password);
    cy.get("#AccountFrm_confirm").type(user.password);
    cy.get("#AccountFrm_newsletter0").check();
    cy.get("#AccountFrm_agree").check();
    return this;
  }

  submitForm() {
    cy.get('button[title="Continue"]').click();
    return this;
  }

  verifyAccountCreated() {
    cy.get("h1.heading1").should(
      "contain.text",
      "Your Account Has Been Created!"
    );
  }
}
