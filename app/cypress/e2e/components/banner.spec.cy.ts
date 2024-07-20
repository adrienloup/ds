describe("Banner component spec", () => {
  it("Renders the banners", () => {
    cy.visit("");

    cy.get('[data-cy="banner-0"]').should("exist");
    cy.get('[data-cy="banner-1"]').should("exist");
  });

  it("Remove the banners", () => {
    cy.visit("");

    cy.get('[data-cy="banner-0"] button').click();
    cy.get('[data-cy="banner-1"] button').click();
  });
});
