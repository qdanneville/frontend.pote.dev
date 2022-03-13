import api from '../../utils/api'
import { useQuery } from 'react-query'

export const allDifficultiesFilter = 'Tous'

const fetchDifficulties = async () => {
    const response = await api.get('/difficulties')
    response.data.unshift(allDifficultiesFilter)
    return response.data
}

const useDifficulties = () => {
    return useQuery(['difficulties'], () => fetchDifficulties())
}

export { useDifficulties, fetchDifficulties }