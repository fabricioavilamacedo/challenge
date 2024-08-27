import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import index from '../pages/indexPage'
import produtos from '../pages/produtosPage'


//@carrinho

Given("que eu esteja na página de produtos advantadeDemo", () => {
    index.access()
  })

When("buscar um produto no site adicionando o ao carrinho", () => {
    index.buscarProduto()
  })

Then("visualizarei o produto no carrinho de compras com sucesso", () => {
    produtos.validarBeats()
  })

//@buscaInvalida

When("buscar um produto invalido no site", () => {
    index.buscarProdutoInvalido()
  })

Then("visualizarei a mensagem de produto não encontrado com sucesso", () => {
    produtos.validarMsgInvalida()
})