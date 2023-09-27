
describe('Navigation', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Navegate our website', () => {
        cy.contains("b", "The Joe Budden Podcast").click()
        cy.url().should('include', '/podcast/1535809341')

        cy.contains("a", "Episode 660 | “Here Comes Thicko”").click()
        cy.url().should('include', '/podcast/1535809341/episode/1000628894481')

        cy.contains("h4", "The Joe Budden Podcast").click()
        cy.url().should('include', '/podcast/1535809341')

        cy.contains("h6", "Podcaster").click()
        cy.url().should('include', '/')
    })

})