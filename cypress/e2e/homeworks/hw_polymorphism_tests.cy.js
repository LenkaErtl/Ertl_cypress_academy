import { HomePage } from "../../page-objects/eshop/home_page";

describe("Tredgate Eshop - Polymorphism Header Test", () => {
  it("Open iPhone product and return via logo", () => {
    const expectedDescription = `iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a name or number in your address book, a favorites list, or a call log. It also automatically syncs all your contacts from a PC, Mac, or Internet service. And it lets you select and listen to voicemail messages in whatever order you want just like email.`;

    new HomePage()
      .visit()
      .openIphoneProduct()
      .verifyDescription(expectedDescription)
      .clickLogo();

    cy.url().should(
      "eq",
      "https://tredgate.com/eshop/index.php?route=common/home"
    );
  });
});
