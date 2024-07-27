describe("Toolsbar", () => {
  it("Renders the toolsbar, and click on each button", () => {
    cy.visit("");
    cy.wait(4e3);

    cy.get('[data-cy="toolsbar"]').should("exist");
    cy.get('[data-cy="toolsbar-notifications"]').click();
    cy.wait(5e2);
    cy.get('[data-cy="modal-close"]').click({ force: true });
    cy.get('[data-cy="toolsbar-settings"]').click();
    cy.wait(5e2);
    cy.get('[data-cy="toolsbar-github"]').click();
    cy.scrollTo(0, 0);
  });
});
