
describe('Input filter test', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('filter "The Joe Budden Podcast" item', () => {
        cy.get('[placeholder="Filter podcasts..."]').type("The Joe Budden Podcast")
        cy.get('b').should('contain', "The Joe Budden Podcast")
    })

})