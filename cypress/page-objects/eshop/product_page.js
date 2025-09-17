import { HeaderSection } from "../pmtool/common/header_section"; // měla bych vytvořit EshopHeaderSection

export class ProductPage extends HeaderSection {
  constructor() {
    super();
    this.descriptionSelector = "#tab-description > p";
    cy.get("#tab-description > p").should("be.visible");
  }

  verifyDescription(expectedText) {
    cy.get(this.descriptionSelector)
      .invoke("text")
      .then((actualText) => {
        expect(actualText.trim()).to.eq(expectedText);
      });
    return this;
  }
}
