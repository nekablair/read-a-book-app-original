// describe('My First Test', () => {
//   it('Gets, types and asserts', () => {
//     cy.visit('https://example.cypress.io')

//     cy.contains('type').click()

//     // Should be on a new URL which
//     // includes '/commands/actions'
//     cy.url().should('include', '/commands/actions')

//     // Get an input, type into it
//     cy.get('.action-email').type('fake@email.com')

//     //  Verify that the value has been updated
//     cy.get('.action-email').should('have.value', 'fake@email.com')
//   })

//   it('create new transaction', () => {
//     // Extend test with Cypress Studio
//   })
// })
// // })

// cypress/e2e/myFirstTest.cy.jsx
describe('My First Cypress Test', () => {
  it('Visits the app and asserts title', () => {
    cy.visit('/'); // Replace with your app's URL
    cy.get('h1').should('contain', 'Vite + React'); // Adjust the selector and text as needed
  });
});

