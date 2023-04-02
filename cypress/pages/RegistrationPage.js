
class RegistrationPage {
    
    btnMyAccount = '#menu-item-50 > a'
    
    inputEmail = '#reg_email'
    
    inputPassword = '#reg_password'
    
    btnRegister = '*[name="register"]'
    
    acessarSite(){
     cy.visit("/");   
    }
    myAccount(){
        cy.get(this.btnMyAccount).click({force: true});
    }
    inserirEmail(email){
        cy.get(this.inputEmail).type(email,{force: true});
    }
    inserirPassword(password){
        cy.get(this.inputPassword).type(password,{force: true});
    }
    registrar(){
        cy.get(this.btnRegister).click({force: true});
    }
    
}
export default RegistrationPage;