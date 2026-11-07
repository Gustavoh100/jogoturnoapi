import RepositoryJogada from '../repository/jogada.js'
import { campeaoInicial, monstroInicial } from '../model/jogada.js'


const monstroJoga = {

}


class ServiceJogada {

    async Status() {
        return RepositoryJogada.Status()
    }

    async Ataque() {
        return RepositoryJogada.Ataque()
    }

    async Defesa() {
        return RepositoryJogada.Defesa()

    }

    async Curar() {
        return RepositoryJogada.Curar()

    }

    async Resetar() {
        return RepositoryJogada.Resetar()

    }

}

export default new ServiceJogada()