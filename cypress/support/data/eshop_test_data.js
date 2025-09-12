// eshop_test_data.js
// Generování testovacích dat pomocí faker
import { fakerCS_CZ as faker } from "@faker-js/faker"; // ? česká lokalizace

export const generateUserData = () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email({
    firstName,
    lastName,
    provider: "seznam.cz",
  });
  const telephone = faker.string.numeric({ length: 9, exclude: ["0"] });
  const password = faker.internet.password({ length: 12, memorable: true });

  return {
    firstName,
    lastName,
    email,
    telephone,
    password,
  };
};
