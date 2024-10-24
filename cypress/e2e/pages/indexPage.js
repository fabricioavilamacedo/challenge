
const el = require('../elements/index').INDEX
class Index {
    access(){
        cy.visit('', { failOnStatusCode: false })
        //cy.wait(5000)
    }

    login(){
        cy.get(el.email, {timeout: 2000}).type('beltrano@qa.com.br')
        cy.get(el.senha, {timeout: 2000}).type('teste')
        cy.get(el.btnEntrar, {timeout: 2000}).click()
        cy.screenshot()
    }

    loginInvalido(){
        cy.get(el.email, {timeout: 2000}).type('beltrano@qa.com.br')
        cy.get(el.senha, {timeout: 2000}).type('Teste123')
        cy.get(el.btnEntrar, {timeout: 2000}).click()
        cy.screenshot()
    }

    validacaoPageLogin(){
        cy.get(el.email, {timeout: 2000}).should('be.visible')
        cy.screenshot()
    }
}
export default new Index()