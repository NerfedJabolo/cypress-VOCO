Cypress.Commands.add('acceptCookies', () => {
  cy.wait(1500);

  cy.get('body').then(($body) => {
    const $dialog = $body.find('.cky-consent-container:visible');

    if (!$dialog.length) {
      return;
    }

    cy.wrap($dialog.find('.cky-btn-accept').first()).click({ force: true });
    cy.wrap($dialog).should('not.be.visible');
  });
});

Cypress.Commands.add('searchFor', (term) => {
  cy.get('[data-testid="header-search"]')
    .should('be.visible')
    .clear()
    .type(`${term}{enter}`);

  cy.location('pathname').should('include', '/et/catalogsearch/result');
});

Cypress.Commands.add('visitProduct', () => {
  cy.visit('/et/harry-potter-ja-tulepeeker-1.html');
  cy.acceptCookies();
  cy.get('h1').should('contain.text', 'Harry Potter ja tulepeeker');
  cy.get('[data-testid="product-add-to-cart"]').should('be.visible');
});
