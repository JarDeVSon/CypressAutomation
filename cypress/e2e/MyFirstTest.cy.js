Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
import HomePage from "../pages/HomePage";
import RegistrationPage from "../pages/RegistrationPage";

const registrationPage = new RegistrationPage();
const homePage = new HomePage();


describe("My fist test in cypress with pom model", () => {
    
    beforeEach(()=>{
        registrationPage.acessarSite();
    })
    it("Registration with successfully", () => {
    cy.fixture("mockdata").then((data) => {
        registrationPage.myAccount();
        registrationPage.inserirEmail(data.email);
        registrationPage.inserirPassword(data.password);
        registrationPage.registrar();
        homePage.getTextWelcome();
    });
  });
});
