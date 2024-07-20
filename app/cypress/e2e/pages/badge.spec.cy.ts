describe("Badge page spec", () => {
  it("Renders the skeleton", () => {
    cy.visit("badge");

    cy.get('[data-cy="header"]').should("exist");
    cy.get('[data-cy="main"]').should("exist");
    cy.get('[data-cy="footer"]').should("exist");
  });

  it("Renders the menu", () => {
    cy.visit("badge");

    cy.get('[data-cy="accordion-0"]').should("exist");
    cy.get('[data-cy="accordion-1"]').should("exist");
    cy.get('[data-cy="accordion-2"]').should("exist");
    cy.get('[data-cy="accordion-3"]').should("exist");
    cy.get('[data-cy="accordion-4"]').should("exist");
    cy.get('[data-cy="accordion-5"]').should("exist");
    cy.get('[data-cy="accordion-6"]').should("exist");
  });

  it("Renders the logo", () => {
    cy.visit("badge");

    cy.get('[data-cy="logo"]').should("exist");
  });

  it("Renders the banners", () => {
    cy.visit("badge");

    cy.get('[data-cy="banner-0"]').should("exist");
    cy.get('[data-cy="banner-1"]').should("exist");
  });

  it("Renders the title", () => {
    cy.visit("badge");

    cy.get('[data-cy="title"]').should("exist");
  });
});
