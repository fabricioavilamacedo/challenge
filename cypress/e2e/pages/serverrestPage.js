
const el = require('../elements/serverrest').SERVERREST
class serverRest {
    validarLogin(){
        cy.get(el.btnCadastrar, {timeout: 2000}).should('be.visible')
        cy.screenshot()
    }

    msgInvalida(){
        cy.get(el.msgEmailSenhaInvalida, {timeout: 2000}).should('be.visible')
        cy.screenshot()
    }

    logout(){
        cy.get(el.btnLogout, {timeout: 2000}).click()
        cy.screenshot()
    }
}   
export default new serverRest()