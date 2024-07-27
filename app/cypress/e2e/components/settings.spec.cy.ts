describe("Settings", () => {
  it("Renders the settings, and change the mode", () => {
    cy.visit("");
    cy.wait(4e3);

    cy.get('[data-cy="settings"]').should("exist");

    cy.get('[data-cy="toolsbar-settings"]').click();
    cy.wait(5e2);
    cy.get('[data-cy="settings-light-mode"]').click();
    cy.wait(5e2);
    cy.get('[data-cy="settings-system-mode"]').click();
    cy.wait(5e2);
    cy.get('[data-cy="settings-dark-mode"]').click();
    cy.scrollTo(0, 0);
  });
});
