describe("Header", () => {
  it("Renders logo and menu, and click on each accordion", () => {
    cy.visit("");
    cy.wait(4e3);

    cy.get('[data-cy="logo"]').should("exist");
    cy.get('[data-cy="menu"]').should("exist");
    cy.get('[data-cy="menu-accordion-0"]').should("exist");
    cy.get('[data-cy="menu-accordion-1"]').should("exist");
    cy.get('[data-cy="menu-accordion-2"]').should("exist");
    cy.get('[data-cy="menu-accordion-3"]').should("exist");
    cy.get('[data-cy="menu-accordion-4"]').should("exist");
    cy.get('[data-cy="menu-accordion-5"]').should("exist");
    cy.get('[data-cy="menu-accordion-6"]').should("exist");

    cy.get('[data-cy="menu-accordion-0"] button').click();
    cy.wait(5e2);
    cy.get('[data-cy="menu-accordion-1"] button').click();
    cy.wait(5e2);
    cy.get('[data-cy="menu-accordion-2"] button').click();
    cy.wait(5e2);
    cy.get('[data-cy="menu-accordion-3"] button').click();
    cy.wait(5e2);
    cy.get('[data-cy="menu-accordion-4"] button').click();
    cy.wait(5e2);
    cy.get('[data-cy="menu-accordion-5"] button').click();
    cy.wait(5e2);
    cy.get('[data-cy="menu-accordion-6"] button').click();
    cy.scrollTo(0, 0);
  });
});
