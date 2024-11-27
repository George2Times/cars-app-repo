describe('Car App - Delete a Car', () => {
  it('should delete an existing car', () => {
    cy.visit('http://localhost:4200/');
    
    // Usuń auto o nazwie "Test Car B"
    cy.contains('Test Car B').parent().find('button').contains('Delete Car').click();

    // Sprawdź, czy auto zostało usunięte z listy
    cy.contains('Test Car B').should('not.exist');
  });
});
