describe('Apollo product detail page', () => {
  it('shows product information, changes quantity, and adds the item to the cart', () => {
    cy.visitProduct();

    cy.get('h1').first().should('contain.text', 'Harry Potter ja tulepeeker');
    cy.get('main [data-testid="price-regular"]')
      .first()
      .invoke('text')
      .should('match', /\d+,\d{2}\s*€/);

    cy.get('[data-testid="product-qty"]').should('have.value', '1');
    cy.get('[data-testid="product-qty"]')
      .invoke('attr', 'id')
      .then((quantityId) => {
        cy.get(
          `button[aria-controls="${quantityId}"][aria-label="Suurenda"]`,
        ).click();
      });
    cy.get('[data-testid="product-qty"]').should('have.value', '2');

    cy.get('[data-testid="product-add-to-cart"]').click();

    cy.contains('Toode lisati ostukorvi').should('be.visible');
    cy.contains('a', 'Ava ostukorv').should('be.visible');
    cy.contains('button', 'Jätka ostmist').should('be.visible');
  });
});
