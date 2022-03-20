import api from '../../utils/api'
import { useQuery } from 'react-query'

const fetchCourses = async (filtersProps = null) => {

    let difficultyFilter;
    let technologyFilter;
    let tagsFilter;
    let filters = '';

    if (filtersProps) {
        const { difficulty, technology, tags } = filtersProps

        difficultyFilter = difficulty === 'Tous' || difficulty === '' || difficulty === null ? '' : `&difficulty=${difficulty}`
        technologyFilter = technology === 'Toutes' || technology === '' || technology === null ? '' : `&technology=${technology}`
        tagsFilter = tags.map(tag => `&tags=${tag}`)

        filters = difficultyFilter + technologyFilter

        if (tagsFilter.length > 0) {
            tagsFilter.forEach(tag => filters = filters + tag)
        }
    }

    const response = await api.get(`/courses?${filters}`)
    return response.data
}

const fetchAllCoursesSlug = async () => {
    const response = await api.get('/courses')
    return response.data.map(course => ({ params: { slug: course.slug } }))
}

const fetchCourseBySlug = async (slug) => {
    const response = await api.get(`/courses/${slug}`)
    return response.data
}

const useCourseBySlug = (slug) => {
    return useQuery([`courses/${slug}`, slug], () => fetchCourseBySlug(slug))
}

const useCourses = (filters) => {
    return useQuery(['courses', filters], () => fetchCourses(filters), { keepPreviousData: true })
}

export { useCourses, fetchCourses, fetchAllCoursesSlug, fetchCourseBySlug, useCourseBySlug }