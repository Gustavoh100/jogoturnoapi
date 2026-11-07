import api from './api'

export const ataque = async () => {
    const response = await api.get('/jogada/ataque')

    return response.data
}

export const defender = async () => {
    const response = await api.get('/jogada/defesa')

    return response.data
}

export const curar = async () => {
    const response = await api.get('/jogada/curar')

    return response.data
}

export const status = async () => {
    const response = await api.get('/jogada/status')

    return response.data
}

export const resetar = async () => {
    const response = await api.get('/jogada/resetar')

    return response.data
}