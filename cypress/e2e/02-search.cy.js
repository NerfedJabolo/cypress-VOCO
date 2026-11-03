describe('Apollo product search', () => {
  beforeEach(() => {
    cy.visit('/et');
    cy.acceptCookies();
  });

  it('finds products from the header search and exposes pagination', () => {
    cy.searchFor('Harry Potter');

    cy.location('search').should('include', 'q=');
    cy.get('main h1')
      .first()
      .invoke('text')
      .then((heading) => {
        expect(heading.toLowerCase()).to.include('harry potter');
      });

    cy.get('[data-testid="pagination"]').should('be.visible');
    cy.get('main a[href*="harry-potter"]')
      .its('length')
      .should('be.greaterThan', 4);
  });

  it('shows an empty result set for an unknown search term', () => {
    cy.visit('/et/catalogsearch/result/?q=zzzznotarealproductzzz');
    cy.acceptCookies();

    cy.get('main h1').first().should('contain.text', 'zzzznotarealproductzzz');
    cy.get('main').first().should('contain.text', 'Tooteid kategoorias 0');
    cy.get('[data-testid="pagination"]').should('not.exist');
  });
});
