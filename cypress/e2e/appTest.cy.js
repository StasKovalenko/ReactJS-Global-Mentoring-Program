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
  it("check add course functionality", () => {
    cy.get('[data-cy="addMovieBtnCy"]').click()
    cy.url().should('include', 'new')
    cy.get('.modalMovieContainer').should('be.visible')
    cy.get('.modalMovieContainer').within(() => {
      cy.get("#title").type("Movie Title");
      cy.get("#releaseDate").type("2023-05-22");
      cy.get("#email").type("https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg");
      cy.get("#rating").type("8.5");
      cy.get("#runtime").type("120");
      cy.get("#overview").type("This is a movie overview");
      cy.get('.genresDropDown').click()
      cy.get('.options').click()
      cy.get('[data-testid="submit"]').click();
    })
    cy.get(".modalSuccessWrap").should('be.visible')

    cy.get(".dialogCloseBtn").click()

    cy.get('.search_input').type('Movie Title')
    cy.contains('Movie Title')
    cy.get('.search_input').clear()

    cy.get('[data-cy="addMovieBtnCy"]').click()
    cy.get('[data-testid="submit"]').click();
    cy.contains('Title is required')
    cy.contains('URL is required')
    cy.contains('ReleaseDate is required')
  })

  it("check edit course functionality", () => {
    cy.get('.movieTile')
      .eq(0)
      .within((e) => {
        e.trigger("mouseover")
        cy.get('.editAndDelete').click({force:true})
        cy.get('.dropDownBtnEdit').click()
      })
    cy.get('.dialog-content').should('be.visible')
    cy.url().should('include', 'edit')
    cy.get('.dialog-title').should('be.visible');
    cy.get('#title').should('be.visible');
    cy.get('#rating').should('be.visible');
    cy.get('#email').should('be.visible');
    cy.get('[data-testid=submit]').click()
    cy.get('.dialog-content').should('not.exist')
  })
})