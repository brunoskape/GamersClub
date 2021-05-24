/// <reference types = "Cypress" />

describe('search ranking', () => {
    it('verify ranking', () => {

        cy.visit('www.gamersclub.com.br')
        cy.get('.ChangelogModal__close').click()
        cy.get('.MainMenu__itemMedia > .fa').click()
        cy.get('[href="/ranked"] > .MainMenu__itemLabel').click()
        cy.get('.RankingHeader__title').contains('Ranking')
        

    })


})

