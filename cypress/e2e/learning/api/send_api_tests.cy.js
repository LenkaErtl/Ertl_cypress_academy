// send_api_tests.cy.js
// e2e/learning/api
import { faker } from "@faker-js/faker";
import { TegBLoginPage } from "../../../page-objects/tegb/tegb_login_page.js";
import { UserApi } from "../../../api/tegb/user_api.js";

describe("Send API Tests", () => {
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

  it("POST Registration TEG#B", () => {
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
      expect(response.body.userId).to.be.ok;
      expect(response.body).to.have.property("userId"); // ? Stejné jako to.be.ok
      expect(response.body.username).to.equal(username);
      expect(response.body.email).to.be.a("string"); // ? Kontrola datového typu, alternativa k typeof kontrole api_tests.cy.js
    });

    new TegBLoginPage().openTegb().login(username, password);
  });

  it("Register with API object", () => {
    new UserApi().register(username, password, email).then((response) => {
      expect(response.status).to.equal(201);
    });
  });

  it("Login with API Object", () => {
    new UserApi()
      .login(Cypress.env("tegb_username"), Cypress.env("tegb_password"))
      .then((response) => {
        expect(response.status).to.equal(201);
      });
  });
});
