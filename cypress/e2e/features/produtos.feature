Feature: Produtos

    Deve realizar as validações de busca de produto e carrinho

@carrinho
Scenario: Adicionar um produto ao carrinho com sucesso
Given que eu esteja na página de produtos advantadeDemo
When buscar um produto no site adicionando o ao carrinho
Then visualizarei o produto no carrinho de compras com sucesso

@buscaInvalida
Scenario: Realizar a busca de um produto invalido com sucesso
Given que eu esteja na página de produtos advantadeDemo
When buscar um produto invalido no site
Then visualizarei a mensagem de produto não encontrado com sucesso