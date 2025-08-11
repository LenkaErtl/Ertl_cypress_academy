import moment from "moment";

describe("Working with time and date", () => {
  it("Using moment.js", () => {
    const currentTimestamp = moment();
    cy.log(`Aktuální timestamp: ${currentTimestamp}`);
    cy.log(`ISO 8601 formát (například pro DB): ${currentTimestamp.format()}`);
    cy.log(
      `Formát timestamp: DD. MM. YYYY hh:mm - ${currentTimestamp.format(
        "D. M. YYYY HH:mm"
      )}`
    );

    const futureDate = moment().add(2, "years").format("D.M.YYYY");
    const pastDate = moment().subtract(1, "week").format("D.M.YYYY");
    cy.log(
      `Datum v budoucnosti: ${futureDate}, datum v minulosti: ${pastDate}`
    );

    const czechTimestamp = moment().locale("cs").format("LLLL");
    cy.log(`Český datum a čas: ${czechTimestamp}`);
  });
});
