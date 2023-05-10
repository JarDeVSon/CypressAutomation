import registration from '../selectors/Registration.sel.cy'
class RegistrationPage {
    
    acessarSite(){
     cy.visit("/");   
    }
    myAccount(){
        cy.get(registration.btnMyAccount).click({force: true});    }
    inserirEmail(email){
        console.log(registration.inputEmail);
        cy.get(registration.inputEmail).type(email,{force: true});
    }
    inserirPassword(password){
        console.log(registration.inputPassword);
        cy.get(registration.inputPassword).type(password,{force: true});
    }
    registrar(){
        cy.get(registration.btnRegister).click({force: true});
    }
    
}
export default RegistrationPage;