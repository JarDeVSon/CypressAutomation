Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
import HomePage from "../pages/HomePage";
import RegistrationPage from "../pages/RegistrationPage";

const registrationPage = new RegistrationPage();
const homePage = new HomePage();
const faker = require("faker");
const devices = ["desktop", "ipad-mini", "iphone-6"];

devices.forEach((viewport) => {
  describe(`[ My Test Suite ] - ${viewport}`, () => {

    beforeEach(() => {
      // callback function to execute before each test
      if (viewport != "desktop") {
        cy.viewport(viewport);
        cy.log(viewport);
      }
    });
    // afterEach(() => {
      //callback function to execute after each test
    //   cy.injectAxe();
    //   cy.checkA11y();
    // })
    // it("Registration with successfully", () => {
    //   // cy.fixture("mockdata").then((data) => {

    //   registrationPage.acessarSite();
    //   registrationPage.myAccount();
    //   registrationPage.inserirEmail(faker.internet.email());
    //   registrationPage.inserirPassword(faker.internet.password());
    //   registrationPage.registrar();
    //   homePage.getTextWelcome();
    //   // });
    // });
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
  });
});
