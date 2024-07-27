describe("Banner", () => {
  it("Renders the banner, and click on close button", () => {
    cy.visit("");
    cy.wait(4e3);

    cy.get('[data-cy="banner0"]').should("exist");
    cy.get('[data-cy="banner1"]').should("exist");
    cy.scrollTo(0, 0);

    cy.get('[data-cy="banner0"]').within(() => {
      cy.get('[data-cy="banner-close"]').should("exist").click();
    });

    cy.scrollTo(0, 0);
    cy.wait(5e2);

    cy.get('[data-cy="banner1"]').within(() => {
      cy.get('[data-cy="banner-close"]').should("exist").click();
    });

    cy.scrollTo(0, 0);
  });
});
