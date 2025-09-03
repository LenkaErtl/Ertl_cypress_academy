import { HeaderSection } from "../pmtool/common/header_section";

export class HomePage extends HeaderSection {
  constructor() {
    super();
    this.productLinkSelector =
      "#content > div.row > div:nth-child(1) > div > div.caption > h4 > a";
    this.productUrl =
      "https://tredgate.com/eshop/index.php?route=product/product&amp;product_id=40";
  }

  visit() {
    cy.visit("https://tredgate.com/eshop/");
    return this;
  }

  openRegistration() {
    cy.contains("My Account").click();
    cy.contains("Register").click();
    return this;
  }

  openIphoneProduct() {
    const { ProductPage } = require("./product_page");
    cy.get(this.productLinkSelector).click();
    return new ProductPage();
  }

  openIphoneProductDirectly() {
    const { ProductPage } = require("./product_page");
    cy.visit(this.productUrl);
    return new ProductPage();
  }
}
