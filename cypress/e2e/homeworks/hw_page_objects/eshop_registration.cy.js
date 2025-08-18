import { HomePage } from "../../../page-objects/eshop/home_page";
import { RegistrationPage } from "../../../page-objects/eshop/registration_page";

describe("Eshop Registration Test", () => {
  const homePage = new HomePage();
  const registrationPage = new RegistrationPage();

  it("should open eshop and attempt registration", () => {
    homePage.visit();
    homePage.openRegistration();
    registrationPage.fillForm();
    registrationPage.submit();

    cy.contains("Warning: You must agree to the Privacy Policy!").should(
      "be.visible"
    );
  });
});
