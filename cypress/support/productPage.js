class ProductPage {
  addToCart() {
    cy.get("a.cart").click();
    return this;
  }

  verifyAddedToCart() {
    cy.get(".contentpanel").should("contain.text", "Skinsheen Bronzer Stick");
    return this;
  }
}

export default ProductPage;
