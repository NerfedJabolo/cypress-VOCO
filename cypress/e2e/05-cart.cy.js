describe('Apollo shopping cart', () => {
  it('updates the quantity and removes the item from the cart', () => {
    cy.visitProduct();

    cy.get('[data-testid="product-add-to-cart"]').click();
    cy.contains('a', 'Ava ostukorv').click();

    cy.location('pathname').should('eq', '/et/cart');
    cy.get('h1#checkout-primary-title').should('contain.text', 'Ostukorv');
    cy.contains('a', 'Harry Potter ja tulepeeker').should('be.visible');
    cy.get('[data-testid="cart-item-qty"]').should('have.value', '1');
    cy.get('[data-testid="header-cart"]').should('contain.text', '1');

    cy.get('button[aria-label="Lisa kogus"]').first().click();
    cy.get('[data-testid="cart-item-qty"]').should('have.value', '2');
    cy.get('[data-testid="header-cart"]').should('contain.text', '2');

    cy.get('[data-testid="cart-item-remove"]').click();
    cy.contains('Teie ostukorv on tühi!').should('be.visible');
    cy.get('[data-testid="cart-item-remove"]').should('not.exist');
  });
});
