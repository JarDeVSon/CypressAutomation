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
  before(() => {
    cy.injectAxe();
  //   // ;[[1920, 1080], 'ipad-2', 'iphone-xr', 'samsung-note9'].forEach(size => {
  //   //   if (Cypress._.isArray(size)) {
  //   //     cy.viewport(size[0], size[1], size[2])
  //   //   } else {
  //   //     cy.viewport(size)
  //   //   }

  //   // //   cy.checkA11y();
  //   // })
  });
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
  it("Registration with Cypress Commands with fixture", () => {
    cy.fixture("mockdata").then((data) => {
      cy.registration(data.email, data.password);
    });
  });
  it("Registration with Cypress Commands with faker", () => {
    cy.registration(faker.internet.email(), faker.internet.password());
  });
});
