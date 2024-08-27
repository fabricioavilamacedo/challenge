
const el = require('../elements/index').INDEX
class Index {
    access(){
        cy.visit('', { failOnStatusCode: false })
        cy.wait(5000)
    }

    buscarProduto(){
        cy.get(el.buscar, {timeout: 2000}).click()
        cy.get(el.search, {timeout: 2000}).type('beats studio')
        cy.get(el.buscar, {timeout: 2000}).click()
        cy.wait(2000)
        cy.screenshot()

    }

    buscarProdutoInvalido(){
        cy.get(el.buscar, {timeout: 2000}).click()
        cy.get(el.search, {timeout: 2000}).type('inexistente')
        cy.get(el.buscar, {timeout: 2000}).click()
        cy.wait(2000)
        cy.screenshot()
    }
}
export default new Index()