const faker = require('faker')
/// <reference types = "Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })


describe('search ranking and yours values', () => {
  beforeEach(() => cy.visit('https://www.gamersclub.com.br/'))       
    it('verify ranking general', () => {
        
       cy.acessarRanking()     
       cy.get('.RankingHeader__title').contains('Ranking')
        

    })

    it('verify ranking open values', () => {
    cy.acessarRanking()     
    cy.get('.RankingFilterButtonItem--open')
      .should('be.visible')
      .click()    
    cy.url().should('contains', 'ranked')
    cy.get('.PrizesItem__description').should('have.text','30 dias de assinatura Premium')
       
})

    it('verify ranking challenge values', () => {
        cy.acessarRanking()     
        cy.get('.RankingFilterButtonItem--challenge')
        .should('be.visible')
        .click()
        cy.url().should('contain', '=challenge')
        cy.get(':nth-child(1) > .slideInner___2mfX9 > .PrizesItem > .PrizesItem__description')
          .should('have.text','R$100,00 em skins')
        cy.get(':nth-child(2) > .slideInner___2mfX9 > .PrizesItem > .PrizesItem__description')
          .should('have.text','R$25,00 em skins')
 

    })

    it('verify ranking pro values', () => {
        cy.acessarRanking()     
        cy.get('.RankingFilterButtonItem--pro')
        .should('be.visible')
        .click()
        cy.url().should('contain', '=pro')
        cy.get(':nth-child(1) > .slideInner___2mfX9 > .PrizesItem > .PrizesItem__description').should('have.text','RAZER MOUSE DEATHADDER V2 MINI')
        cy.get(':nth-child(2) > .slideInner___2mfX9 > .PrizesItem > .PrizesItem__description').should('have.text','R$100,00 em skins')
        

    })

})