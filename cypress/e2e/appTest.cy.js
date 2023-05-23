describe('Test my SPA', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('Cover search functionality', () => {
    cy.get('.search_input').type('The lord')
    cy.get('.movieTile').should('contain', 'The Lord');
    cy.get('.search_input').clear();
    cy.get('.movieTile').should('contain', 'Fifty Shades Freed')
  })
  it('Cover sorting byTitle functionality', () => {
    cy.get('.sortByValue').click()
    cy.get('.sortByOptionsDropDown').should('be.visible')
    cy.get('[data-testid="title"]').should('be.visible').click()
    cy.get('.movieTile').then((movieTiles) => {
    
    const movieTitles = movieTiles.map((movieTile) => {
      return Cypress.$(movieTile).find('[data-testid="title"]').text();
    }).get();

    expect(movieTitles).to.deep.equal(movieTitles.sort());
    });
    cy.get('.sortByValue').click();
    cy.get('[value="release date"]').should('be.visible').click();
    cy.get('.movieTile').then((movieTiles) => {
      const releaseDates = movieTiles.map((movieTile) => {
        const releaseDate = Cypress.$(movieTile).find('[data-testid="release_date"]').text();
        return new Date(releaseDate).getTime();
      }).get();
    expect(releaseDates).to.deep.equal(releaseDates.sort((a, b) => a - b));
    });
  })
  it('Cover switching genres functionality', () => {
    cy.get('.genreList').should('be.visible')
    cy.get('.genreList').find('.genreListItem')
    cy.get('[data-testid="Comedy"]').as('btn').click()
    cy.get('[data-testid="Comedy"]').should('have.class', 'active')
    cy.wait(500)
    cy.get('.moviesContainer')
      .as('movies')
      .find('.movieTile')
      .each(($el) => {
        cy.wrap($el).find('.movieGenres').should('contain', 'Comedy')
    })
  })
  it('Cover selected movie functionality', () => {
    cy.get('.movieTile').should('be.visible');
    cy.get('.movieTile').first().click() 
    cy.get('.movieDetailsContainer').should('be.visible');
    cy.get('.movieDetails')
      .filter(':visible')
      .first()
      .click();
    cy.get('.movieDetailsContainer').should('not.exist');
  })
  it('Cover returning to search ', () => {
    cy.get('.search_input').type('Coco')
    cy.get('.movieTile').should('contain', 'Coco');
    cy.get('.search_input').clear();
    cy.get('.movieTile').should('contain', 'Fifty Shades Freed')
  })


  it('cover Url has an adress from input before and after reloading', () => {
    cy.get('.search_input').type('The Matrix');
    cy.url().should('include', 'search=The+Matrix');
    cy.reload(true)
    cy.url().should('include', 'search=The+Matrix');
    cy.get('.search_input').clear().type('The Lord');
    cy.url().should('include', 'search=The+Lord');
    cy.reload(true)
    cy.url().should('include', 'search=The+Lord');
    
  });

  it('cover url has an adress from activeGenre', () => {
    cy.get('[data-testid="Horror"]').click().should('have.class', 'active');
    cy.url().should('include', 'filter=Horror')
    cy.reload();
    cy.url().should('include', 'filter=Horror')
  });

  it('cover url has an adress from sortBy', () => {
    cy.get('[data-testid="sortByBtn"]').click();
    cy.get('[data-testid="title"]').click();
    cy.url().should('include', 'sortBy=title')
    cy.reload();
    cy.url().should('include', 'sortBy=title')
  });

  it('cover url has an adress from selectedMovie', () => {
    cy.get('.movieTile').should('be.visible');
    cy.get('.movieTile').first().click();
    cy.get('.movieDetailsContainer').should('be.visible');
    cy.url().should('include', '/movie/337167');
    cy.reload();
    cy.url().should('include', '/movie/337167');
  });
})