describe('Apollo category browsing', () => {
  it('opens the books landing page and drills into Estonian books', () => {
    cy.visit('/et/raamatud');
    cy.acceptCookies();

    cy.get('h1').first().should('contain.text', 'Raamatud');
    cy.contains('a', 'Eestikeelsed raamatud').first().click();

    cy.location('pathname').should('eq', '/et/raamatud/eestikeelsed-raamatud');
    cy.get('h1').first().should('contain.text', 'Eestikeelsed raamatud');
    cy.get('main a[href$=".html"]')
      .its('length')
      .should('be.greaterThan', 5);
  });
});
