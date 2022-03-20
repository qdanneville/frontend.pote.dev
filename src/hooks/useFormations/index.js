import api from '../../utils/api'
import { useQuery } from 'react-query'

const fetchFormations = async (filtersProps = null) => {

    let difficultyFilter;
    let technologyFilter;
    let filters = '';

    if (filtersProps) {
        const { difficulty, technology } = filtersProps

        difficultyFilter = difficulty === 'Tous' || difficulty === '' ? '' : `difficulty=${difficulty}`
        technologyFilter = technology === 'Toutes' || technology === '' ? '' : `technology=${technology}`

        if (difficultyFilter && technologyFilter) difficultyFilter += '&'

        filters = difficultyFilter + technologyFilter
    }

    const response = await api.get(`/formations?${filters}`)
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
    return useQuery([`formations/${slug}`,slug], () => fetchFormationBySlug(slug))
}

const useFormations = (filters) => {
    return useQuery(['formations', filters], () => fetchFormations(filters), { keepPreviousData : true })
}

export { useFormations, fetchFormations, fetchAllFormationsSlug, fetchFormationBySlug, useFormationBySlug }