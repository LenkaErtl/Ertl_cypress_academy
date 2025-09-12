// bonus_fluent_eshop.test.ts
// BONUS úkol: Fluent API v Tredgate Eshopu

import { generateUserData } from "../../../support/data/eshop_test_data";

describe("Eshop – nákup iPhonu", () => {
  it("Registrace, přidání do košíku, kontrola a odstranění", () => {
    const user = generateUserData();

    cy.clearCookies();
    cy.clearLocalStorage();
    cy.log(`Generovaná data: ${JSON.stringify(user)}`);

    // Otevření eshopu
    cy.visit("https://tredgate.com/eshop/", { timeout: 20000 });

    // Registrace uživatele
    cy.get("#top-links").contains("My Account").click({ force: true });
    cy.contains("Register").click({ force: true });

    cy.get("#input-firstname").type(user.firstName);
    cy.get("#input-lastname").type(user.lastName);
    cy.get("#input-email").type(user.email);
    cy.get("#input-telephone").type(user.telephone);
    cy.get("#input-password").type(user.password);
    cy.get("#input-confirm").type(user.password);
    cy.get('input[name="newsletter"][value="1"]').check();
    cy.get('input[name="agree"]').check();

    cy.get("form").then(($form) => {
      $form[0].submit();
    });

    cy.visit("https://tredgate.com/eshop/index.php?route=account/account", {
      timeout: 20000,
    });

    cy.get("#logo > a > img").click({ force: true });

    cy.contains(".product-layout", "iPhone")
      .find("h4 > a")
      .first()
      .click({ force: true });

    cy.url().should("include", "product_id=40");

    cy.get("#button-cart").click({ force: true });

    cy.get("#cart > button").click({ force: true });
    cy.contains("View Cart").click({ force: true });
    cy.url().should("include", "checkout/cart");

    cy.get(".table-responsive").should("contain", "iPhone");

    // Ověření množství
    cy.get("td.text-right").eq(0).should("contain", "1");

    // Ověření jednotkové ceny – td:nth-child(5)
    cy.get("#content > form > div > table > tbody > tr > td:nth-child(5)")
      .invoke("text")
      .then((unitPrice) => {
        const raw = unitPrice.trim();
        cy.log("Jednotková cena:", raw);
        const cleaned = raw
          .replace(/\s/g, "")
          .replace(/[^\d.,]/g, "")
          .replace(",", ".");
        const value = parseFloat(cleaned);
        expect(raw.length).to.be.greaterThan(0);
        expect(isNaN(value)).to.be.false;
        expect(value).to.be.greaterThan(0);
      });

    // Ověření celkové ceny – td:nth-child(6)
    cy.get("#content > form > div > table > tbody > tr > td:nth-child(6)")
      .invoke("text")
      .then((totalPrice) => {
        const raw = totalPrice.trim();
        cy.log("Celková cena:", raw);
        const cleaned = raw
          .replace(/\s/g, "")
          .replace(/[^\d.,]/g, "")
          .replace(",", ".");
        const value = parseFloat(cleaned);
        expect(raw.length).to.be.greaterThan(0);
        expect(isNaN(value)).to.be.false;
        expect(value).to.be.greaterThan(0);
      });

    // Ověření modelu produktu – td:nth-child(3)
    cy.get("#content > form > div > table > tbody > tr > td:nth-child(3)")
      .invoke("text")
      .then((text) => {
        expect(text.trim().toLowerCase()).to.include("product 11");
      });

    // Odstranění produktu – klikneme na první tlačítko "smazat"
    cy.get("#content > form > div > table > tbody > tr")
      .first()
      .find("button.btn-danger")
      .click({ force: true });

    // Ověření, že košík je prázdný
    cy.url().should("include", "checkout/cart");
    cy.get("#content").should("contain.text", "Your shopping cart is empty!");

    // BONUS: návrat na hlavní stránku přes logo
    cy.get("#logo > a > img").click({ force: true });
    cy.url().should("include", "common/home");
  });
});
