// eshop_cart_page.js
// Page Object pro stránku s košíkem

export class EshopCartPage {
  verifyCartItem({ unitPrice, quantity, total, model }) {
    cy.get('[data-testid="cart_item"]').within(() => {
      cy.get('[data-testid="unit_price"]').should("contain.text", unitPrice);
      cy.get('[data-testid="quantity"]').should(
        "have.text",
        quantity.toString()
      );
      cy.get('[data-testid="total_price"]').should("contain.text", total);
      cy.get('[data-testid="model"]').should("contain.text", model);
    });
    return this;
  }

  removeItem() {
    cy.get('[data-testid="remove_item"]').click();
    cy.get('[data-testid="cart_item"]').should("not.exist");
    return this;
  }
}
