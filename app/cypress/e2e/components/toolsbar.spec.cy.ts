describe("Toolsbar component spec", () => {
  it("Renders the toolsbar", () => {
    cy.visit("");
    cy.wait(4e3);
    cy.get('[data-cy="toolsbar"]').should("exist");
  });

  it("Click on each button on the toolsbar", () => {
    cy.visit("");
    cy.wait(4e3);
    cy.get('[data-cy="toolsbar-github"]').click();
    cy.get('[data-cy="toolsbar-notifications"]').click();
    cy.get('[data-cy="modal-close"]').click({ force: true });
    cy.get('[data-cy="toolsbar-settings"]').click();
  });
});
