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

        cy.get('.AuthForm__line--smallSpacing > .WasdCSFormCheckbox > .WasdCSFormCheckbox__item > .WasdCSFormCheckbox__fakeInput').click() //necessário refatorar essa linha. 
        cy.get('.WasdCSButton--success').invoke('removeAttr', 'target').click()
        cy.get('#steamAccountName').type(userData.randomName)
        cy.get('#steamPassword').type(userData.randomPassword)
        cy.get(':nth-child(3) > h2').should('have.text', 'Observe que beta.gamersclub.com.br não está associado ao Steam ou à Valve')
    })

})