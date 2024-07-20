describe("Overview page spec", () => {
  it("Renders the skeleton", () => {
    cy.visit("overview");
    cy.wait(4e3);
    cy.get('[data-cy="header"]').should("exist");
    cy.get('[data-cy="main"]').should("exist");
    cy.get('[data-cy="footer"]').should("exist");
  });

  it("Renders the logo", () => {
    cy.visit("overview");
    cy.wait(4e3);
    cy.get('[data-cy="logo"]').should("exist");
  });

  it("Renders the title", () => {
    cy.visit("overview");
    cy.wait(4e3);
    cy.get('[data-cy="title"]').should("exist");
  });
});
