describe('Apollo home page and primary navigation', () => {
  beforeEach(() => {
    cy.visit('/et');
    cy.acceptCookies();
  });

  it('renders the storefront chrome and navigates to the book category', () => {
    cy.get('[data-testid="header-search"]').should('be.visible');
    cy.get('[data-testid="header-cart"]')
      .should('be.visible')
      .and('have.attr', 'href', '/et/cart');

    cy.get('[data-testid="main-menu"]').within(() => {
      ['Raamatud', 'E-raamatud', 'Kingitused', 'Filmid', 'Muusika'].forEach(
        (label) => {
          cy.contains('a', label).should('be.visible');
        },
      );
    });

    cy.get('main').first().should('be.visible');
    cy.contains('a', 'info@apollo.ee').should('be.visible');

    cy.get('[data-testid="main-menu"]').contains('a', 'Raamatud').click();

    cy.location('pathname').should('eq', '/et/raamatud');
    cy.get('h1').first().should('contain.text', 'Raamatud');
  });
});
