const faker = require('faker')
/// <reference types = "Cypress" />

describe('new signature', () => {
    beforeEach(() => cy.visit('https://www.gamersclub.com.br/'))       
      it('verify signature', () => {
          
         cy.acessarAssinatura()     
         cy.get('.RankingHeader__title').contains('Assinatura')
          
  
      })
  
    })

