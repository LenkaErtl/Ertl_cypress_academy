import HomePage from "../../support/homePage";

describe("Fluent test – přidání produktu do košíku", () => {
  it("Vloží produkt SKINSHEEN BRONZER STICK do košíku", () => {
    new HomePage()
      .visit()
      .clickOnProduct("SKINSHEEN BRONZER STICK")
      .addToCart()
      .verifyAddedToCart();
  });
});
