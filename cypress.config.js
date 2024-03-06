import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true
  },
});

// import { defineConfig } from "cypress";

// export default defineConfig({
//   e2e: {
//     baseUrl: "http://localhost:5173/",
//     supportFile: false
//   },
//   integration: {
//     baseUrl: "http://localhost:5173/",
//     supportFile: false
//   },
//   viewportWidth: 1024,
//   viewportHeight: 768,
//   video: false,
// });

// // Intercept the prompt window
// cy.on('window:prompt', (message) => {
//   // Handle the prompt
//   // You can return a string to provide the input value
//   // For example:
//   expect(message).to.equal('Please enter your name:');
//   return 'John Doe'; // Provide the input value
// });

// // Trigger the action that would bring up the prompt
// cy.get('.trigger-button').click();

// https://applitools.com/blog/testing-browser-alerts-confirmations-prompts-cypress/
