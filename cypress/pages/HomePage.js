
import homepage from '../selectors/Home.sel.cy'
class HomePage {
    getTextWelcome(){
        console.log(homepage.textWelcome)
        cy.contains('p','Hello').should('be.visible');
        cy.contains(homepage.textWelcome,'Hello');


    }
}
export default HomePage;