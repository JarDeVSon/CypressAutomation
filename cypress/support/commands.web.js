import urls from '../support/urls'
import registration from '../selectors/Registration.sel.cy.js'
import homepage from '../selectors/HomePage.sel.cy'

Cypress.Commands.add('registration', (email, password) => { 
    cy.visit(urls.registration);
    cy.get(registration.inputEmail).type(email,{force: true});
    cy.get(registration.inputPassword).type(password,{force: true});
    cy.get(registration.btnRegister).click({force: true});
    cy.contains('p','Hello').should('be.visible');
    cy.contains(homepage.textWelcome,'Hello');
 })
