/// <reference types="Cypress" />

context('Map', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads the maps API', () => {
    cy.get('[data-qa="map-loaded"]').should('have.text', 'Maps API loaded!');
  });
});
