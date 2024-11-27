describe('Car App - Edit a Car', () => {
  it('should edit an existing car', () => {
    cy.visit('http://localhost:4200/car-details?id=1'); // Zakładając, że 1 to id istniejącego auta

    // Zaktualizuj nazwę auta
    cy.get('#car-name').clear().type('Updated Car A');
    cy.get('#car-model').clear().type('Updated Model A');
    
    // Zapisz zmiany
    cy.get('button').contains('Save').click();

    // Sprawdź, czy auto zostało zaktualizowane na liście
    cy.visit('http://localhost:4200/');
    cy.contains('Updated Car A (Updated Model A)');
  });
});
