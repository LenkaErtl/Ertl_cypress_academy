// eshop_home_page.js
// Page Object pro domovskou stránku eshopu

export class EshopHomePage {
  open() {
    cy.visit("https://tredgate.com/eshop/");
    return this;
  }

  goToRegistration() {
    cy.contains("My Account").click();
    cy.contains("Register").click();
    return this;
  }

  clickLogo() {
    cy.get('[data-testid="logo"]').click();
    return this;
  }

  addToCart(productName) {
    cy.contains('[data-testid="product_card"]', productName)
      .find('[data-testid="add_to_cart"]')
      .click();
    return this;
  }

  openCart() {
    cy.get('[data-testid="cart_link"]').click();
    return this;
  }
}
