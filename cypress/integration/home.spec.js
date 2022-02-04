/// <reference types="cypress" />

describe('home get formations', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001')
    })

    it('display a formation title', () => {
        cy.get('h1').should('have.text', 'Formations lists :')
    })

    it('displays 3 formation items by default', () => {
        cy.get('.formation-list li').should('have.length', 3)
    })
})
