import ServiceJogada from '../service/jogada.js'

class ControllerJogada {


    async Status(req, res) {
        const status = ServiceJogada.Status()
        res.send(status)
    }

    async Ataque(req, res) {
        const resultado = ServiceJogada.Ataque()
        res.send(resultado)

    }

    async Defesa(req, res) {


    }

    async Curar(req, res) {

    }

    async Resetar(req, res) {

    }


}
export default new ControllerJogada