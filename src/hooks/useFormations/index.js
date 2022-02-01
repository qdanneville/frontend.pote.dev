import api from '../../utils/api'
import { useQuery } from 'react-query'

const fetchFormations = async () => {
    const response = await api.get('/formations')
    return response.data
}

const fetchAllFormationsSlug = async () => {
    const response = await api.get('/formations')
    return response.data.map(formation => ({ params: { slug: formation.slug } }))
}

const fetchFormationBySlug = async (slug) => {
    const response = await api.get(`/formations/${slug}`)
    return response.data
}

const useFormationBySlug = (slug) => {
    return useQuery(['formation'], () => fetchFormationBySlug(slug))
}

const useFormations = () => {
    return useQuery(['formations'], () => fetchFormations())
}

export { useFormations, fetchFormations, fetchAllFormationsSlug, fetchFormationBySlug, useFormationBySlug }