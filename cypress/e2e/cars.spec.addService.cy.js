describe('Car App - Add Service to Car', () => {
    it('should add a service to an existing car', () => {
      cy.visit('http://localhost:4200/car-details?id=2'); // Zakładając, że 2 to id istniejącego auta
  
      // Dodaj nową usługę
      cy.get('#service-part').should('be.visible').clear().type('Brake Pads Replacement');
      cy.get('#service-cost').should('be.visible').clear().type('250');
      cy.get('button').contains('Save').click();
  
      cy.visit('http://localhost:4200/car-details?id=2');
      // Dodaj krótki czas oczekiwania
      // cy.wait(500); // 500 ms
      // Sprawdź, czy nowa usługa jest na liście
      cy.get('div').should('contain', 'Brake Pads Replacement');
      cy.get('div').should('contain', '250');
    });
  });
  