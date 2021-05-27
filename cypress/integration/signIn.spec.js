const faker = require('faker')
/// <reference types = "Cypress" />

let userData = {
    randomName: faker.name.findName(),
    randomEmail: faker.internet.email(),
    randomPassword: faker.random.number()
}

describe('register', () => {
    
    beforeEach(() => cy.visit('https://www.gamersclub.com.br/'))     
    it('register new user', () => {

        cy.get('.ChangelogModal__close').click()
        cy.get('.MainHeader__primary > .AccountActionButtons > :nth-child(1) > .CustomButton > .CustomButton__text').click()
        cy.get('#authEmail').type(userData.randomEmail)
        //cy.get('input[type=checkbox]').check()
       //necessário refatorar o trecho abaixo
        cy.get('.AuthForm__line--smallSpacing > .WasdCSFormCheckbox > .WasdCSFormCheckbox__item > .WasdCSFormCheckbox__fakeInput').click()
        cy.get('.WasdCSButton--success').click()
        
    

    })

})