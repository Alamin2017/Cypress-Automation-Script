describe('My First Test', function(){

    it('Does match ', () => {
        expect(true).to.equal(true);        
    });
    it('Does not match', () => {
        expect(true).to.not.equal(false);
    });
    it('verify title -positive', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.title().should('eq','OrangeHRM');
    });
    it('Dropdown with select', () => {
        cy.visit("https://www.nop-station.com/");
        cy.get(".ico-cart").click()
    });
    
});