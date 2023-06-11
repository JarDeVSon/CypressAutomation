
import homepage from '../selectors/Home.sel.cy'
class HomePage {
    getTextWelcome(){
        console.log(homepage.message.textWelcome);
        cy.contains(homepage.message.textWelcome,'Hello').should('be.visible');
    }
}
export default HomePage;