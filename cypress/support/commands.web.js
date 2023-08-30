
import registration from '../selectors/Registration.sel.cy.js'
import homepage from '../selectors/Home.sel.cy'

Cypress.Commands.add('registration', (email, password) => { 
    cy.visit('my-account/');
    cy.get(registration.fields.inputEmail).type(email,{force: true});
    cy.get(registration.fields.inputPassword).type(password,{force: true});
    cy.get(registration.buttons.btnRegister).click({force: true});
    cy.contains('p','Hello').should('be.visible');
    cy.contains(homepage.message.textWelcome,'Hello').should('be.visible');
 })
