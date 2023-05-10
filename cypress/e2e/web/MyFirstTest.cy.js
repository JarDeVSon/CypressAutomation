Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
import HomePage from "../../pages/HomePage";
import RegistrationPage from "../../pages/RegistrationPage";

const registrationPage = new RegistrationPage();
const homePage = new HomePage();
const faker = require("faker");

describe("My fist test in cypress with pom model", () => {
    // before(() => {
  //   // cy.injectAxe();
  //   // cy.checkA11y();
  // });
  context('macbook-13 1280,724 resolution', () => {
    beforeEach(()=>{
      // cy.viewport('ipad-2');
      cy.viewport(1280,724);
    })
    it("Registration with successfully", () => {
      // cy.fixture("mockdata").then((data) => {
        registrationPage.acessarSite();
        registrationPage.myAccount();
        registrationPage.inserirEmail(faker.internet.email());
        registrationPage.inserirPassword(faker.internet.password());
        registrationPage.registrar();
        homePage.getTextWelcome();
      // });
    });
  // it("Registration with Cypress Commands with fixture", () => {
  //   cy.fixture("mockdata").then((data) => {
  //     cy.log(data.email);
  //     cy.log(data.password);
  //     cy.registration(data.email, data.password);
  //   });
  // });
  it("Registration with Cypress Commands with faker", () => {
    cy.registration(faker.internet.email(), faker.internet.password());
  });
  })
  context('ipad-2 768, 1024', () => {
    beforeEach(()=>{
      // cy.viewport('ipad-2');
      cy.viewport(768,1024);
    })
    it("Registration with successfully", () => {
      // cy.fixture("mockdata").then((data) => {
        registrationPage.acessarSite();
        registrationPage.myAccount();
        registrationPage.inserirEmail(faker.internet.email());
        registrationPage.inserirPassword(faker.internet.password());
        registrationPage.registrar();
        homePage.getTextWelcome();
      // });
    });
  // it("Registration with Cypress Commands with fixture", () => {
  //   cy.fixture("mockdata").then((data) => {
  //     cy.log(data.email);
  //     cy.log(data.password);
  //     cy.registration(data.email, data.password);
  //   });
  // });
  it("Registration with Cypress Commands with faker", () => {
    cy.registration(faker.internet.email(), faker.internet.password());
  });
  })
  context('iphone-5 320, 480 resolution', () => {
    beforeEach(()=>{
      // cy.viewport('iphone-5');
      cy.viewport(320,480);

    })
    it("Registration with successfully", () => {
      // cy.fixture("mockdata").then((data) => {
        registrationPage.acessarSite();
        registrationPage.myAccount();
        registrationPage.inserirEmail(faker.internet.email());
        registrationPage.inserirPassword(faker.internet.password());
        registrationPage.registrar();
        homePage.getTextWelcome();
      // });
    });
  // it("Registration with Cypress Commands with fixture", () => {
  //   cy.fixture("mockdata").then((data) => {
  //     cy.log(data.email);
  //     cy.log(data.password);
  //     cy.registration(data.email, data.password);
  //   });
  // });
  it("Registration with Cypress Commands with faker", () => {
    cy.registration(faker.internet.email(), faker.internet.password());
  });
  })
});
