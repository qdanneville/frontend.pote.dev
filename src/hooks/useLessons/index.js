import api from '../../utils/api'
import { useQuery } from 'react-query'

const fetchAllLessonsSlug = async () => {
    const response = await api.get('/lessons')
    return response.data.map(lesson => ({ params: { slug: lesson.slug } }))
}

const fetchLessonBySlug = async (slug) => {
    const response = await api.get(`/lessons/${slug}`)
    return response.data
}

const useLessonBySlug = (slug) => {
    return useQuery([`lessons/${slug}`, slug], () => fetchLessonBySlug(slug))
}

export { fetchAllLessonsSlug, fetchLessonBySlug, useLessonBySlug }