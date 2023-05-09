import registration from '../selectors/Registration.sel.cy'
class RegistrationPage {
    
    btnMyAccount = '#menu-item-50 > a'
    
    inputEmail = '#reg_email'
    
    inputPassword = '#reg_password'
    
    btnRegister = '*[name="register"]'
    
    acessarSite(){
     cy.visit("/");   
    }
    myAccount(){
        cy.get(registration.btnMyAccount).click({force: true});
        console.log(this.btnMyAccount)
        cy.get(this.btnMyAccount).click({force: true});
    }
    inserirEmail(email){
        console.log(this.inputEmail)
        cy.get(this.inputEmail).type(email,{force: true});
    }
    inserirPassword(password){
        console.log(this.inputPassword)
        cy.get(this.inputPassword).type(password,{force: true});
    }
    registrar(){
        console.log(this.btnRegister)
        cy.get(this.btnRegister).click({force: true});
    }
    
}
export default RegistrationPage;