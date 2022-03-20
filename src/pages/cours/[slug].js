import { dehydrate, QueryClient } from 'react-query'
import { fetchAllCoursesSlug, fetchCourseBySlug, useCourseBySlug } from '../../hooks'
import { useRouter } from 'next/router'

import { CourseSyllabusHeader } from '../../components/CourseSyllabus/courseSyllabusHeader'
import { CourseSyllabusDescription } from '../../components/CourseSyllabus/courseSyllabusDescription'
import { CourseSyllabusChaptersList } from '../../components/CourseSyllabus/courseSyllabusChaptersList'

import { Loader } from '../../components/Common/loader'

export default function Course(props) {

    // console.log('props course : ', props.dehydratedState.queries[0].state.data);
    console.log('props course : ', props);

    const router = useRouter()
    const { slug } = router.query

    const { data } = useCourseBySlug(slug)

    console.log('data : ', data);

    return <>
        <CourseSyllabusHeader {...data} />
        <div className='flex flex-col min-h-full max-w-7xl w-full mx-auto px-4 mt-10 relative'>
            <CourseSyllabusDescription {...data} />
            <CourseSyllabusChaptersList {...data} />
        </div>
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

    await queryClient.prefetchQuery([`courses/${params.slug}`, params.slug], () => fetchCourseBySlug(params.slug))

    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        },
    }
}