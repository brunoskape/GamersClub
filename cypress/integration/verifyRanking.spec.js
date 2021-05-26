/// <reference types = "Cypress" />

describe('search ranking', () => {
    beforeEach(() => cy.visit('https://www.gamersclub.com.br/'))     
    it('verify ranking general', () => {
        
       cy.acessarRanking()     
       cy.get('.RankingHeader__title').contains('Ranking')
        

    })

it('verify ranking challenge', () => {
    cy.acessarRanking()     
    cy.get('.RankingFilterButtonItem--challenge').click()
    cy.url().should('contain', '=challenge');
    
 

})

})

