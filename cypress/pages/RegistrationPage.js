import registration from '../selectors/Registration.sel.cy'
class RegistrationPage {
    
    acessarSite(){
     cy.visit("/");   
    }
    myAccount(){
        cy.get(registration.buttons.btnMyAccount).click({force: true});    }
    inserirEmail(email){
        console.log(registration.fields.inputEmail);
        cy.get(registration.fields.inputEmail).type(email,{force: true});
    }
    inserirPassword(password){
        console.log(registration.fields.inputPassword);
        cy.get(registration.fields.inputPassword).type(password,{force: true});
    }
    registrar(){
        cy.get(registration.buttons.btnRegister).click({force: true});
    }
    
}
export default RegistrationPage;