import { faker } from "@faker-js/faker";

describe("Exercise: sending API", () => {
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
  });

  it("Register and Login to TEGB", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/user/register",
      body: {
        username: username,
        password,
        email,
      },
    }).then((response) => {
      expect(response.status).to.equal(201);
    });
    cy.request({
      method: "POST",
      url: "http://localhost:3000/auth/login",
      body: {
        username,
        password,
      },
    }).then((response) => {
      expect(response.status).to.equal(201);
    });
  });
});
