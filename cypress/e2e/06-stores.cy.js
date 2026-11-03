describe('Apollo store locator', () => {
  it('lists stores and jumps to a selected store', () => {
    cy.visit('/et/kauplused');
    cy.acceptCookies();

    cy.get('h1').first().should('contain.text', 'Apollo Kauplused');
    cy.get('h3[id$="-title"]').its('length').should('be.greaterThan', 10);
    cy.contains('h3', 'Solaris Keskuse Apollo').should('be.visible');
    cy.contains('h3', 'Tartu Kaubamaja Apollo').should('be.visible');

    cy.contains('button', 'Näita kaardil').first().should('be.visible');
    cy.contains('a', 'Solaris Keskuse Apollo').click();

    cy.location('hash').should(
      'eq',
      '#1b9fb5c7-fa6d-4b0c-9159-48bfa61edf3c',
    );
  });
});
