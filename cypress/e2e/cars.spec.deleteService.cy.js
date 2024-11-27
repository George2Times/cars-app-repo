describe('Car App - Delete Service from Car', () => {
    it('should delete a service from a car', () => {
      cy.visit('http://localhost:4200/car-details?id=2'); // Zakładając, że 2 to id istniejącego auta
  
      // Usuń usługę "Brake Pads Replacement"
      cy.contains('Brake Pads Replacement').parent().find('button').contains('Delete').click();
  
      // Sprawdź, czy usługa została usunięta
      cy.contains('Brake Pads Replacement').should('not.exist');
    });
  });
  