describe("Registrace uživatele", () => {
  it("Vyplní všechna textová pole mimo datum narození a doplní pohlaví a povolání", () => {
    cy.visit("https://tredgate.com/webtrain/registration.html");
    cy.wait(1000);

    // Proměnné pro vstupní data
    const name = "Jana Eiblová";
    const email = "jana.eiblova@example.com";
    const phone = "725123859";
    const password = "Test1234";
    const address = "Sídliště 223";
    const gender = "Female";
    const occupation = "Učitelka";

    // Vyplnění textových polí
    cy.get('[name="name"]').type(name);
    cy.get('[name="email"]').type(email);
    cy.get('[name="phone"]').type(phone);

    // Výběr preferovaného kontaktu – Email
    cy.get("#contact-email").check();

    cy.get('[name="password"]').type(password);
    cy.get('input[type="password"]').eq(1).type(password); // potvrzení hesla

    // Datum narození se vynechává

    // Výběr pohlaví z dropdownu
    cy.get('[name="gender"]').select(gender);

    // Pole pro povolání je ve formuláři zakázané (má atribut disabled), takže do něj normálně nejde psát.
    // V testu to ale obejdeme a vynutíme zápis pomocí { force: true }, abychom mohli simulovat vyplnění.
    cy.get("#occupation").type(occupation, { force: true });

    // Adresa
    cy.get('[name="address"]').type(address);

    // Odeslání formuláře
    cy.get('[type="submit"]').click();
  });
});
