
const el = require('../elements/produtos').PRODUTOS
class validarProd {
    validarBeats(){
        cy.get(el.prodBeats, {timeout: 2000}).should('be.visible')
        cy.get(el.prodBeats, {timeout: 2000}).click()
        cy.get(el.btnAdd, {timeout: 2000}).click()
        cy.get(el.prodBeatsCarrinho, {timeout: 2000}).should('be.visible')
        cy.screenshot()
    }

    validarMsgInvalida(){
        cy.get(el.msgProduto, {timeout: 2000}).should('contain', 'inexistente')
        cy.screenshot()
    }
}
export default new validarProd()