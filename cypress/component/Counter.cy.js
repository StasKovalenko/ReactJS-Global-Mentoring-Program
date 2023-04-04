/* eslint-disable cypress/no-assigning-return-values */
import React from 'react'
import Counter from '../../src/modules/Counter/Counter'

describe('Counter', () => {
  const initialValue = 5;
  it('Test that component renders initial value provided in props', () => {
    cy.mount(<Counter initialValue={initialValue}/>)
    cy.get('.count_value').should('have.text', initialValue);
  });

  it('Test that a click event on "decrement" button decrements the displayed value', () => {
    cy.mount(<Counter initialValue={initialValue}/>)
    const decrementBtn = cy.get('[data-cy=decrement]')
    decrementBtn.click()
    cy.get('.count_value').should('have.text', initialValue-1);
  })

  it('Test that a click event on "increment" button increments the displayed value', () => {
    cy.mount(<Counter initialValue={initialValue}/>)
    const incrementBtn = cy.get('[data-cy=increment]')
    incrementBtn.click()
    cy.get('.count_value').should('have.text', initialValue+1);
  });
})
