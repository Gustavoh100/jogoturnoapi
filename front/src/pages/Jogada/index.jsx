import { useState } from 'react';
import './style.css'
import { ataque, curar, defender } from '../../api/jogada';
import { useNavigate } from 'react-router-dom'


export default function Jogada() {
    const navigate = useNavigate()
    const [hpCampeao, setHpCampeao] = useState(300);
    const [hpMonstro, setHpMonstro] = useState(200);
    const [danoCampeao, setDanoCampeao] = useState(18);
    const [danoMonstro, setDanoMonstro] = useState(25);
    const [curaCampeao, setCuraCampeao] = useState(80);
    const [defesa, setDefesa] = useState(false);
    const [turno, setTurno] = useState('');

    const fim = hpCampeao === 0 || hpMonstro === 0;


    const handleAtaque = async (e) => {
        e.preventDefault()

        if (fim) {
            alert("foite")
        }

        const dano = await ataque(hpMonstro - danoCampeao)
        setHpMonstro(dano)

        return navigate('/ataque')
    }

    const handleCura = async (e) => {
        e.preventDefault()

        if (fim) {
            alert("foite")
        }

        const cura = await curar(hpCampeao + curaCampeao)
        setCuraCampeao(cura)

        return navigate('/cura')
    }

    const handleDefesa = async (e) => {
        e.preventDefault()

        if (fim) {
            alert("foite")
        }

        defender(setDefesa(true))

        return navigate('/defesa')
    }

    return (
        <div className="login-container">
            <form className="login-form">
                <h2>joga ai</h2>

                <button
                    className="button"
                    type="submit"
                    onClick={handleAtaque}
                >Atacar</button>
                <button
                    className="button"
                    type="submit"
                    onClick={handleCura}
                >Curar</button>
                <button
                    className="button"
                    type="submit"
                    onClick={handleDefesa}
                >Defesa</button>
                <h5>duvido</h5>
            </form>
        </div>

        



    );
}
