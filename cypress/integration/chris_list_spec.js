describe('login actually works', () => {
    it('Should load the page', () => {
        //  http://localhost:9009/#/login
        cy.visit('http://165.22.173.29:9009/#/login')
    })
})
 
describe('Add Item Input Field', () => {
    it('Should be able to type in the email input field', () => {
        cy.get('#email').click({force: true})
        .type('bryantest@gmail.com')
        .should('have.value', 'bryantest@gmail.com')
    })
    it('Should be able to type in the password input field', () => {
        cy.get('#password').click({force: true})
        .type('test1234')
        .should('have.value', 'test1234')
    })
    it('Should log in', () => {
        cy.get('#login-button')
        .click()

        
    })
})

describe('Chat actually works', () => {
    it('Should load the page', () => {
        cy.visit('http://165.22.173.29:9009/#/chat')
    })
})

describe('Add Item Input Field', () => {
    it('Should be able to type in the input field', () => {
        cy.get('#input').click({force: true})
        .type('input typing works')
        .should('have.value', 'input typing works')
    })
    it('Should add something to the page when you click the button', () => {
        cy.get('#submit-btn')
        .click()

        cy.contains('input typing works');
    })
})

