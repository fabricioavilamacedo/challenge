/// <reference types="Cypress" />

function getProduto(produto){
    return cy.request ({
        method: 'GET',
        url: 'https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name='+ produto +'&quantityPerEachCategory=-1',
        failOnStatusCode: false,
    })
}

export {getProduto}