
describe('Input filter test', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Episode "Episode 660 | “Here Comes Thicko”" should has the audio source', () => {

        cy.contains("b", "The Joe Budden Podcast").click()
        cy.url().should('include', '/podcast/1535809341')

        cy.contains("a", "Episode 660 | “Here Comes Thicko”").click()
        cy.url().should('include', '/podcast/1535809341/episode/1000628894481')

        cy.get('audio')
            .invoke('attr', 'src').should('equal', 'https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_660.mp3?dest-id=2422538')
           
    })

})