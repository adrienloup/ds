describe("Avatar page spec", () => {
  it("Renders the skeleton", () => {
    cy.visit("avatar");
    cy.wait(4e3);
    cy.get('[data-cy="header"]').should("exist");
    cy.get('[data-cy="main"]').should("exist");
    cy.get('[data-cy="footer"]').should("exist");
  });

  it("Renders the logo", () => {
    cy.visit("avatar");
    cy.wait(4e3);
    cy.get('[data-cy="logo"]').should("exist");
  });

  it("Renders the title", () => {
    cy.visit("avatar");
    cy.wait(4e3);
    cy.get('[data-cy="title"]').should("exist");
  });
});
