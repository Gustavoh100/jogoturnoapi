import { campeaoInicial, monstroInicial } from '../model/jogada.js'
class RepositoryJogada {

    async Status() {
        res.json({
            campeaoInicial: campeaoInicial.hp,
            monstroInicial: monstroInicial.hp
        })
    }

    async Ataque() {
     monstroInicial.hp = monstroInicial.hp - campeaoInicial.ataque
        if (monstroInicial.hp <= 0) {
            monstroInicial.hp = 0
            return res.json({
                message: "voce venceu",
                campeaoInicial: campeaoInicial.hp,
                monstroInicial: monstroInicial.hp
            })



        }

    }

    async Defesa() {

    }

    async Curar() {



    }

    async Resetar() {
    }

}

export default new RepositoryJogada()