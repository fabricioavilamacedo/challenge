import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import users from '../pages/apiUsuarios'


//@busca

When("enviar uma requisição com id valido na Api de busca de usuarios", () => {
    users.buscarId()
  })

Then("terei o status code 200 com os dados do usuario exibido no response com sucesso", () => {
    users.buscarId()
  })

//@buscaInvalida

When("enviar uma requisição com id invalido na Api de busca de usuarios", () => {
    users.buscarIdInvalido()
  })

Then("terei o status code 400 com a mensagem de usuario não encontrado", () => {
    users.buscarIdInvalido()
})

//@cadastroInvalido

When("enviar uma requisição com email ja cadastrado na Api de criacao de usuarios", () => {
  users.criacaoUserInvalido()
})

Then("terei o status code 400 com a mensagem de este email ja esta sendo usado", () => {
  users.criacaoUserInvalido()
})