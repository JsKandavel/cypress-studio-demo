describe('template spec', () => {
  it('passes', () => {
    //cy.visit('https://example.cypress.io')
    cy.visit('http://localhost:4200')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('app.spec.ts', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('localhost:4200');
    cy.get('.highlight-card > span').should('have.text', 'cypress-studio-demo app is running!');
    cy.get('.highlight-card > span').should('be.visible');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[comp-id="41"]').click();
    cy.get('[comp-id="45"]').click();
    cy.get('[comp-id="49"]').click();
    cy.get('[comp-id="53"]').click();
    cy.get('.ag-cell-focus').should('be.visible');
    cy.get('app-grid > button').click();
    cy.get('[ng-reflect-router-link="/details"]').click();
    cy.get('app-details > p').should('have.text', 'details works!');
    /* ==== End Cypress Studio ==== */
  });
})