describe("Banner component spec", () => {
  it("Renders the banners", () => {
    cy.visit("");
    cy.wait(4e3);
    cy.get('[data-cy="banner-1"]').should("exist");
  });

  it("Remove the banners", () => {
    cy.visit("");
    cy.wait(4e3);
    cy.get('[data-cy="banner-1"] button').click();
  });
});
