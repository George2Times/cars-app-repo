
describe('Car App - Add a New Car', () => {
  it('should add a new car', () => {
    cy.visit('http://localhost:4200/car-details');
    
    // Poczekaj na widoczność inputu z ID 'car-name'
    cy.get('#car-name').should('be.visible').type('Test Car B');
    cy.get('#car-model').should('be.visible').type('Test Model B');
    
    // Zapisz auto
    cy.get('button').contains('Save').click();

    // Sprawdzenie, czy nowy samochód został dodany do listy
    // cy.visit('http://localhost:4200'); // po zapisie strona jest przekierowana do http://localhost:4200
    cy.contains('Test Car B (Test Model B)');
  });
});
