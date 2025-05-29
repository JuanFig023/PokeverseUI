describe('Pokeverse Cypress Test', () => {

  beforeEach(()=> {
    cy.visit("http://localhost:5173/")
    cy.wait(9000);
  });

  it('Renders page and title', () => {
    cy.get('[data-test="header-Title"]').should('exist')
    .should('have.text', 'Pokéverse | All Pokémon');

  })

  it('Renders all 151 Pokemon', () => {
    cy.get('[data-test^="pokemon-Card"]').should('exist');
  })

  it('Adds a Pokemon to the squad', () => {
    cy.get('[data-test="button1"]').click({force: true})

    cy.get('[data-test="squad-Title"]').should('exist')
    .should('have.text', 'Your Squad!');

    cy.get('[data-test="squad-List"]').should('have.length', 1);
  })
})