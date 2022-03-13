import api from '../../utils/api'
import { useQuery } from 'react-query'

const fetchTags = async () => {
    const response = await api.get('/tags')
    return response.data
}

const useTags = () => {
    return useQuery(['tags'], () => fetchTags())
}

export { useTags, fetchTags }