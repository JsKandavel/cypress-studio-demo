describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('dummy-test', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:4200');
    cy.get('[href="https://angular.io/tutorial"] > span').should('have.text', 'Learn Angular');
    cy.get('app-grid > button').should('be.enabled');
    cy.get('app-grid > button').should('be.visible');
    cy.get('[comp-id="41"]').click();
    cy.get('[comp-id="45"]').click();
    cy.get('[comp-id="49"]').click();
    cy.get('app-grid > button').click();
    cy.get('[ng-reflect-router-link="/details"]').click();
    /* ==== End Cypress Studio ==== */
  });
})