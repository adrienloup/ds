describe("Settings component spec", () => {
  it("Renders the settings", () => {
    cy.visit("");
    cy.wait(4e3);
    cy.get('[data-cy="settings"]').should("exist");
  });

  it("Change to light mode then dark then system", () => {
    cy.visit("");
    cy.wait(4e3);
    cy.get('[data-cy="toolsbar-settings"]').click();
    cy.wait(5e2);
    cy.get('[data-cy="settings-light-mode"]').click();
    cy.wait(5e2);
    cy.get('[data-cy="settings-dark-mode"]').click();
    cy.wait(5e2);
    cy.get('[data-cy="settings-system-mode"]').click();
    cy.scrollTo(0, 0);
  });
});
