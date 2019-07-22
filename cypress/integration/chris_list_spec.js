describe('login actually works', () => {
    it('Should load the page', () => {
        cy.visit('http://localhost:9011/#/login')
    })
})

describe('Add Item Input Field', () => {
    it('Should be able to type in the email input field', () => {
        cy.get('#email')
        .type('bryantest@gmail.com')
        .should('have.value', 'bryantest@gmail.com')
    })
    it('Should be able to type in the password input field', () => {
        cy.get('#password')
        .type('test1234')
        .should('have.value', 'test1234')
    })
    it('Should log in', () => {
        cy.get('#loginBtn')
        .click()

        
    })
})

describe('Chat actually works', () => {
    it('Should load the page', () => {
        cy.visit('http://localhost:9011/#/chat')
    })
})

describe('Add Item Input Field', () => {
    it('Should be able to type in the input field', () => {
        cy.get('#input')
        .type('input typing works')
        .should('have.value', 'input typing works')
    })
    it('Should add something to the page when you click the button', () => {
        cy.get('#submit-btn')
        .click()

        cy.contains('input typing works');
    })
})

