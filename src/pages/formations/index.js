import React from 'react'
import { dehydrate, QueryClient } from 'react-query'
import { fetchFormations } from '../../hooks'
import { FormationList } from '../../components/FormationList'

export default function () {
    return (
        <section className='flex'>
            <FormationList />
        </section>
    )
}

export async function getStaticProps() {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery(['formations'], () => fetchFormations())

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}