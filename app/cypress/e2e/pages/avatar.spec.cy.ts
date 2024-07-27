describe("Avatar", () => {
  it("Renders the skeleton", () => {
    cy.visit("avatar");
    cy.wait(4e3);

    cy.get('[data-cy="header"]').should("exist");
    cy.get('[data-cy="main"]').should("exist");
    cy.get('[data-cy="footer"]').should("exist");
    cy.get('[data-cy="logo"]').should("exist");
    cy.get('[data-cy="title"]').should("exist");
  });
});
