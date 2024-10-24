import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import index from '../pages/indexPage'
import serverrest from '../pages/serverrestPage'


//@login

Given("que eu esteja na pagina de serverRest", () => {
    index.access()
  })

When("informar dados validos de login", () => {
    index.login()
  })

Then("serei redirecionado para pagina inicial com sucesso", () => {
    serverrest.validarLogin()
  })


//@loginInvalido

When("informar dados invalidos de login", () => {
    index.loginInvalido()
})

Then("verei a mensagem de email ou senha invalidos", () => {
    serverrest.msgInvalida()
})

//@logout

Given("que eu esteja logado serverRest", () => {
    index.access()
    index.login()
})

When("clicar no botao de logout", () => {
    serverrest.logout()
})

Then("serei redirecionado para pagina de login com sucesso", () => {
  index.validacaoPageLogin()
})