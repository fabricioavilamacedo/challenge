/// <reference types="Cypress" />
const payloadUser = require('../payloads/user.json')

function postUser(){
    return cy.request ({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        failOnStatusCode: false,
        heades:{
            'accept':'application/json'
        },
        body: payloadUser
    })
}

export {postUser}