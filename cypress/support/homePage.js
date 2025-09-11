import ProductPage from "./productPage";

class HomePage {
  visit() {
    cy.visit("https://automationteststore.com/");
    return this;
  }

  clickOnProduct(productName) {
    const formattedName = productName
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    cy.get(".fixed_wrapper .prdocutname")
      .contains(formattedName)
      .should("be.visible")
      .click();

    return new ProductPage();
  }
}

export default HomePage;
