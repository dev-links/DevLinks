// UNIT TESTS
describe('Input password Changes', function() {
    context('See letters appear', function() {
        it('change email input', function() {
            cy.visit('http://localhost:9009/#/')
            cy.get('#email').type('Berries')
            cy.get('#email').should('have.value', 'Berries')
        })
    })
})

describe('Input email Changes', function() {
    context('See letters appear', function() {
        it('change password input', function() {
            cy.visit('http://localhost:9009/#/')
            cy.get('#password').type('Avacados')
            cy.get('#password').should('have.value', 'Avacados')
        })
    })
})

describe('Conditional Rendering to Register', function() {
    context('Register will appear', function() {
        it('switches to register', function() {
            cy.visit('http://localhost:9009/#/')
            cy.get('#register-button').click()
            cy.get('input[name=username]')
            cy.get('input[name=email]')
            cy.get('input[name=password]')
        })
        it('switches to login', function(){
            cy.get('#login-button').click()
            cy.get('input[name=email]')
            cy.get('input[name=password]')
        })
    })
})

describe('Input Check', function() {
    it('Checks for input on page', function() {
        cy.visit('http://localhost:9009/#/')
        cy.get('Input')
    })
})

// END TO END TESTS
describe('Logging In', function () {
    const email = 'bryantest@gmail.com'
    const password = 'test1234'

    context('HTML form submission', function () {
        beforeEach(function () {
            cy.visit('http://localhost:9009/#/')
        })

        it('displays errors on login', function () {
            cy.get('#email').type('jane.lae')
            cy.get('#password').type('password123{enter}')
        })

        it('redirects to /client-dashboard on success', function () {
            cy.get('#email').type(email)
            cy.get('#password').type(password)
            cy.get('#login-button').click()
        })
    })
})

describe('Logging In', function () {
    const takenEmail = 'bryantest@gmail.com'
    const username = 'rvchel'
    const password = '1234567'
    const email = '1234@gmail.com'

    context('HTML form submission', function () {
        beforeEach(function () {
            cy.visit('localhost:9009/#/admin-register')
        })

        it('displays errors on login', function () {
        cy.get('input[name=email]').type(takenEmail)
        cy.get('input[name=password]').type(password)
        cy.get('input[name=username]').type(username)
        cy.get('#register-button').click()
        })

        it('redirects to /client-dashboard on success', function () {
            cy.get('input[name=email]').type(email)
            cy.get('input[name=password]').type(password)
            cy.get('input[name=username]').type(username)
            cy.get('#register-button').click()
        })
    })
})
