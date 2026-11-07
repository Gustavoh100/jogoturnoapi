import express from 'express'
import ControllerJogada  from '../controller/jogada.js'
const router = express.Router()

router.get('/status',ControllerJogada.Status )
router.get('/ataque',ControllerJogada.Ataque)
router.get('/defesa',ControllerJogada.Defesa)
router.get('/curar',ControllerJogada.Curar)
router.get('/resetar',ControllerJogada.Resetar)

export default router




