
class HomePage {

    textWelcome = '#page-36 > div > div.woocommerce > div > p:nth-child(1)'

    getTextWelcome(text){
        console.log(this.textWelcome)
        cy.get(this.textWelcome,{timeout: 30000})
        .should('be.visible')
        // .and('have.text',text)
        .and('exist');
    }
}
export default HomePage;