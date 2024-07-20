describe("Home page spec", () => {
  it("Renders the skeleton", () => {
    cy.visit("");
    cy.wait(4e3);
    cy.get('[data-cy="header"]').should("exist");
    cy.get('[data-cy="main"]').should("exist");
    cy.get('[data-cy="footer"]').should("exist");
  });

  it("Renders the logo", () => {
    cy.visit("");
    cy.wait(4e3);
    cy.get('[data-cy="logo"]').should("exist");
  });

  it("Renders the title", () => {
    cy.visit("");
    cy.wait(4e3);
    cy.get('[data-cy="title"]').should("exist");
    cy.get('[data-cy="title"]')
      .should("exist")
      .should(
        "have.text",
        "A pretty good library of React components for Web application's UI"
      );
  });
});
