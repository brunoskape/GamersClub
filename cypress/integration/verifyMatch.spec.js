/// <reference types = "Cypress" />

describe('search last match', () => {
    it('verify last match', () => {

        cy.visit('www.gamersclub.com.br')
        cy.get('.ChangelogModal__close').click()
        cy.get('.MainMenu__itemMedia > .fa').click()
        cy.get('[href="/ranked"] > .MainMenu__itemLabel').click()
        cy.get('.RankingHeader__title').contains('Ranking')


    })


})

