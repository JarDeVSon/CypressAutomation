
import homepage from '../selectors/Home.sel.cy'
class HomePage {
    getTextWelcome(){
        console.log(homepage.textWelcome)
        cy.contains(homepage.textWelcome,'Hello');
        cy.contains('p','Hello').should('be.visible');

    }
}
export default HomePage;