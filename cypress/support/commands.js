// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const faker = require('faker')
Cypress.Commands.add('acessarRanking', () => {

cy.get('.ChangelogModal__close').then($button =>{
  if($button.is(':visible')) {
    cy.get('.ChangelogModal__close').click()
    cy.clickMenuRanking() 

} else {
        cy.clickMenuRanking()    
        }
    })
})


Cypress.Commands.add('acessarAssinatura', () => {

    cy.get('.ChangelogModal__close').then($button =>{
      if($button.is(':visible')) {
        cy.get('.ChangelogModal__close').click()
        cy.clickMenuRanking() 
    
    } else {
            cy.clickMenuRanking()    
            }
        })
    })

    Cypress.Commands.add('clickMenuAssinatura', () => {

        cy.get('.MainMenu__itemMedia > .fa').click()
        cy.get('[href="/shop"] > .MainMenu__itemLabel').click()
    })



Cypress.Commands.add('clickMenuRanking', () => {

    cy.get('.MainMenu__itemMedia > .fa').click()
    cy.get('[href="/ranked"] > .MainMenu__itemLabel').click()
})


import 'cypress-file-upload';