import { AutomationTestStoreRegisterPage } from "../../page-objects/automation_test_store_register_page";
import { user } from "../../helpers/faker_generator.js";

describe("HW13 – Registrace uživatele na Automation Test Store", () => {
  it("Vyplnění registračního formuláře", () => {
    new AutomationTestStoreRegisterPage()
      .openHomePage()
      .clickLoginOrRegister()
      .clickContinueToForm()
      .fillRegistrationForm(user)
      .submitForm()
      .verifyAccountCreated();
  });
});
