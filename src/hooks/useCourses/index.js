import api from '../../utils/api'
import { useQuery } from 'react-query'

const fetchCourses = async (filtersProps = null) => {

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
    return useQuery([`course/${slug}`], () => fetchCourseBySlug(slug))
}

const useCourses = (filters) => {
    return useQuery(['courses', filters], () => fetchCourses(filters), { keepPreviousData: true })
}

export { useCourses, fetchCourses, fetchAllCoursesSlug, fetchCourseBySlug, useCourseBySlug }