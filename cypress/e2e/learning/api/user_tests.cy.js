// user_tests.cy.js
// cypress/e2e/learning/api

import { faker } from "@faker-js/faker";
import { UserApi } from "../../../api/tegb/user_api";

describe("TEG#B User Tests (Using API to login)", () => {
  let username;
  let password;
  let email;

  beforeEach(() => {
    username = faker.internet.username();
    password = faker.internet.password();
    email = faker.internet.email();
    cy.log("Username: " + username);
    cy.log("Password: " + password);
    cy.log("Email: " + email);
    // ! Visit musíme udělat vždy před tím, než nastavíme cookie, jinak se nám cookie špatně nastaví (bez domény)
    cy.visit(Cypress.env("tegb_url"));
  });

  it("Register and Login via API", () => {
    const userApi = new UserApi();
    userApi.register(username, password, email);
    userApi.login(username, password).then((response) => {
      const accessToken = response.body.access_token;
      cy.setCookie("access_token", accessToken);
    });
    cy.visit(Cypress.env("tegb_url") + "app");
  });
});
