describe('register works', () => {
    it('Should load the page', () => {
        cy.visit('http://localhost:9009/#/admin-register')
    })
    it('Should have an unique username', () =>{
        cy.get('#username').click({force: true})
            .type('test14')
            .should( 'have.value','test14')
    })
    it('Should register new user', () =>{
        cy.get('#register-button')
            .click({force: true})
            .visit('http://localhost:9009/#/client-dashboard')
    })
    
})
describe('Nav bar working', () =>{
    it('Drop Nav menu', () =>{
        cy.get('#nav-toggler')
            .click({force: true})
            .get('.job-listing')
            .click({force: true})
            .visit('http://localhost:9009/#/jobListings')
    })
    it('Click DevLinks', () =>{
        cy.get('#nav-dev')
            .click({force: true})
            .visit('http://localhost:9009/#/')
    })
})