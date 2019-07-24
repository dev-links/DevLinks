describe('register works', () => {
    it('Should load the page', () => {
        cy.visit('http://localhost:9009/#/admin-register')
    })
    it('Should have an unique username', () =>{
        cy.get('#handle')
            .type('test9')
            .should( 'have.value','test9')
    })
    it('Should register new user', () =>{
        cy.get('#registerBtn')
            .click()
            .visit('http://localhost:9009/#/client-dashboard')
    })
})
describe('Nav bar working', () =>{
    it('Drop Nav menu', () =>{
        cy.get('Nav')
            .click()
            .get('Job Listing')
            .click()
            .visit('http://localhost:9009/#/jobListings')
    })
    it('Click DevLinks', () =>{
        cy.click('Dev Links')
            .visit('http://localhost:9009/#/login')
    })
})