import { dehydrate, QueryClient } from 'react-query'
import { fetchAllCoursesSlug, fetchCourseBySlug, useCourseBySlug } from '../../hooks'
import { useRouter } from 'next/router'

export default function Course() {

    const router = useRouter()
    const { slug } = router.query

    const { data, isLoading } = useCourseBySlug(slug)

    console.log('course data : ', data);

    if (isLoading) return <div>Loading</div>

    return <>
        <h1>Cours : id</h1>
    </>
}

export async function getStaticPaths() {
    const paths = await fetchAllCoursesSlug()
    return {
        paths,
        fallback: true,
    }
}

export async function getStaticProps({ params }) {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery(['course'], () => fetchCourseBySlug(params.slug))

    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        },
    }
}