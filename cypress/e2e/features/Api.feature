Feature: Api Produtos

    Deve realizar as validações na Api de busca de produto e carrinho

@buscaProduto
Scenario: Validar a Api de busca de produto válido com sucesso
When enviar uma requisição com um produto valido na Api de busca de produtos
Then terei o status code 200 com o produto listado no response com sucesso

@buscaInvalida
Scenario: Validar a Api de busca de produto invalido com sucesso
When enviar uma requisição com um produto invalido na Api de busca de produtos
Then terei o status code 404 com a mensagem de produto não encontrado com sucesso