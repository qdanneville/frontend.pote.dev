import { dehydrate, QueryClient } from 'react-query'
import { fetchAllFormationsSlug, fetchFormationBySlug, useFormationBySlug } from '../../hooks'
import { useRouter } from 'next/router'

import { FormationSyllabusHeader } from '../../components/FormationSyllabus/formationSyllabusHeader'
import { FormationSyllabusDescription } from '../../components/FormationSyllabus/formationSyllabusDescription'
import { FormationSyllabusCoursesList } from '../../components/FormationSyllabus/formationSyllabusCoursesList'

export default function Formation() {

    const router = useRouter()
    const { slug } = router.query

    const { data, isLoading } = useFormationBySlug(slug)

    // if (isLoading) return <div>Loading</div>

    return <>
        <FormationSyllabusHeader {...data} />
        <div className='flex flex-col min-h-full max-w-7xl w-full mx-auto px-4 mt-10'>
            <FormationSyllabusDescription {...data} />
            <FormationSyllabusCoursesList courses={data?.courses} from={{ label: data?.title, link: `/formations/${slug}` }} />
        </div>
    </>
}

export async function getStaticPaths() {
    const paths = await fetchAllFormationsSlug()
    return {
        paths,
        fallback: true,
    }
}

export async function getStaticProps({ params }) {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery([`formations/${params.slug}`,params.slug], () => fetchFormationBySlug(params.slug))

    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        },
    }
}