describe('My Test Suite', () => {

    before(() => {
        cy.log("***** Launch app *****");
    });
    after(() => {
        cy.log("***** Close app *****");
    });
    beforeEach(() => {
        cy.log("***** Login app *****");
    });
    afterEach(() => {
        cy.log("***** Logout app *****");
    });
    it('search ', () => {
        cy.log("***** search *****");
    });
    it('advanced search', () => {
        cy.log("***** advanced search *****"); 
    });
    it('listing products', () => {
        cy.log("***** listing products *****");
    });
    
});