describe("purchase policy", () => {
  it("flow to purchase policy", () => {
    // visit page
    let name = "Faiz";
    let age = "10";
    cy.visit("http://localhost:3000/wizards/step1/");
    cy.findByRole("button", { name: /start/i }).click();

    cy.findByPlaceholderText("Your name").type(name);
    cy.findByPlaceholderText("Your age").type(age);
    cy.findByRole("combobox").select("USA").should("have.value", "USD");
    cy.findByRole("radio", { name: /standard/i }).click();
    cy.findByText(/your premiums/i).should(
      "have.text",
      "Your premiums is : $300.00"
    );
    cy.findByRole("button", { name: /next/i }).click();
    cy.get(".summary-box__list > :nth-child(1) > :nth-child(2)").should(
      "have.text",
      name
    );

    cy.get(".summary-box__list > :nth-child(2) > :nth-child(2)").should(
      "have.text",
      "USA"
    );
    cy.get(":nth-child(3) > :nth-child(2)").should("have.text", "Standard");
    cy.get(":nth-child(4) > :nth-child(2)").should("have.text", "$300.00");
    cy.get(".primary-btn").click();
  });

  it("flow to purchase policy failed due to age more than 99", () => {
    // visit page
    let name = "Faiz";
    let age = "101";
    cy.visit("http://localhost:3000/wizards/step1/");
    cy.findByRole("button", { name: /start/i }).click();

    cy.findByPlaceholderText("Your name").type(name);
    cy.findByPlaceholderText("Your age").type(age);
    cy.findByRole("combobox").select("USA").should("have.value", "USD");
    cy.findByRole("radio", { name: /standard/i }).click();
    cy.findByText(/your premiums/i).should(
      "have.text",
      "Your premiums is : $3,030.00"
    );
    cy.findByRole("button", { name: /next/i }).click();
    cy.get(".main-section > :nth-child(2)").should(
      "have.text",
      "Your age is over our accepted limit!"
    );
    cy.get(".main-section > :nth-child(3)").should(
      "have.text",
      "We are sorry but we cannot insure you now"
    );
    cy.get(".btn").click();
  });
});
