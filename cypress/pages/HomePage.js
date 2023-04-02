
class HomePage {

    textWelcome = '#page-36 > div > div.woocommerce > div > p:nth-child(1)'

    getTextWelcome(){
        cy.get(this.textWelcome,{timeout: 10000}).should('be.visible').and('exist');
    }
}
export default HomePage;