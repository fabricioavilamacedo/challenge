import * as GETProdutos from '../services/requests/GETBuscaProduto'

const produtoValido = 'beats'
const produtoInvalido = 'inexistente'

class getProdutos{
    buscarProdutoValido(){
        GETProdutos.getProduto(produtoValido).should((respProduto) => {
            expect(respProduto.body).to.be.not.null
            expect(respProduto.status).to.eq(200)
            expect(respProduto.body[0].categoryName).to.eq('HEADPHONES')
        })
    }

    buscarProdutoInvalido(){
        GETProdutos.getProduto(produtoInvalido).should((respProdutoIn) => {
            expect(respProdutoIn.body).to.be.not.null
            expect(respProdutoIn.status).to.eq(404)
        })
    }
}
export default new getProdutos()