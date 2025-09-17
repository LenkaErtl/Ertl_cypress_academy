import { fakerCS_CZ as faker } from "@faker-js/faker";

export const user = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),

  // Login name: čistě alfanumerický, 10 znaků
  loginname: faker.string.alphanumeric(10), // např. "Lenka123xy"

  telephone: faker.phone.number("#########"),
  address: faker.location.streetAddress(),
  city: faker.location.city().length < 3 ? "Brno" : faker.location.city(),
  zip: faker.location.zipCode(),
  password: faker.internet.password(10),
};
