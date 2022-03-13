import api from '../../utils/api'
import { useQuery } from 'react-query'

export const allTechnologiesFilter = 'Toutes'

const fetchTechnologies = async () => {
    const response = await api.get('/technologies')
    response.data.unshift(allTechnologiesFilter);
    return response.data
}

const useTechnologies = () => {
    return useQuery(['technologies'], () => fetchTechnologies())
}

export { useTechnologies, fetchTechnologies }