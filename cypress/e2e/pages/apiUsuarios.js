import * as GETUsuarios from '../services/requests/GETBuscaUsuarios'
import * as POSTUsuarios from '../services/requests/POSTCriarUsuarios'

const id = '0uxuPY0cbmQhpEz1'

class usuarios{
    buscarId(){
        GETUsuarios.getUser(id).should((respUser) => {
            expect(respUser.body).to.be.not.null
            expect(respUser.status).to.eq(200)
            expect(respUser.body.nome).to.eq('Fulano da Silva')
        })
    }

    buscarIdInvalido(){
        GETUsuarios.getUser('Teste123').should((respUsers) => {
            expect(respUsers.body).to.be.not.null
            expect(respUsers.status).to.eq(400)
            expect(respUsers.body.message).to.eq('Usuário não encontrado')
        })
    }

    criacaoUserInvalido(){
        POSTUsuarios.postUser().should((respCreate) => {
            expect(respCreate.body).to.be.not.null
            expect(respCreate.status).to.eq(400)
            expect(respCreate.body.message).to.eq('Este email já está sendo usado')
        })
    }
}
export default new usuarios()