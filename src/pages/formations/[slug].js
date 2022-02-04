import { dehydrate, QueryClient } from 'react-query'
import { fetchAllFormationsSlug, fetchFormationBySlug, useFormationBySlug } from '../../hooks'
import { useRouter } from 'next/router'

export default function Formation() {

    const router = useRouter()
    const { slug } = router.query

    const { data, isLoading } = useFormationBySlug(slug)
    const title = data?.props.title

    if (isLoading) return <div>Loading</div>

    return <>
        {title ? title : ''}
        <br />
        <br />
    </>
}

// export async function getStaticPaths() {
//     const paths = await fetchAllFormationsSlug()
//     return {
//         paths,
//         fallback: true,
//     }
// }

// export async function getStaticProps({ params }) {
//     const queryClient = new QueryClient()

//     await queryClient.prefetchQuery(['formation'], () => fetchFormationBySlug(params.slug))

//     return {
//         props: {
//             dehydratedState: dehydrate(queryClient)
//         },
//     }
// }