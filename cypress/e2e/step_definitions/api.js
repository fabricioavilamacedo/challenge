import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import produtos from '../pages/apiProdutos'


//@buscaProduto

When("enviar uma requisição com um produto valido na Api de busca de produtos", () => {
    produtos.buscarProdutoValido()
  })

Then("terei o status code 200 com o produto listado no response com sucesso", () => {
    produtos.buscarProdutoValido()
  })

//@buscaInvalida

When("enviar uma requisição com um produto invalido na Api de busca de produtos", () => {
    produtos.buscarProdutoInvalido()
  })

Then("terei o status code 404 com a mensagem de produto não encontrado com sucesso", () => {
    produtos.buscarProdutoInvalido()
})