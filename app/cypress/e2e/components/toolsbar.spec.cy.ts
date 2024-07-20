describe("Toolsbar component spec", () => {
  it("Renders the toolsbar", () => {
    cy.visit("");

    cy.get('[data-cy="toolsbar"]').should("exist");
  });

  it("Click on each button", () => {
    cy.visit("");

    cy.get('a[aria-label="Github"]').click();
    cy.get('button[aria-label="Notifications"]').click();
    cy.get("div._backdrop_2ksq4_73").click({ force: true });
    cy.get('button[aria-label="Settings"]').click();
  });
});
