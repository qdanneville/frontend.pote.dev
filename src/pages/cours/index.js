import React from 'react'
import { dehydrate, QueryClient } from 'react-query'
import { fetchCourses, fetchTechnologies, fetchDifficulties, fetchTags, useCourses } from '../../hooks'

import { LandingIntro } from '../../components/LandingPage/landingIntro'
import { LandingList } from '../../components/LandingPage/landingList'

export default function () {

    const { data } = useCourses(null)

    return (
        <section className='min-h-full max-w-7xl mx-auto px-4 mt-10'>
            <LandingIntro bgColor='bg-salmon-500'>
                <h1>Des <strong className='text-salmon-900 font-light'>cours</strong> pour <br /> se spécialiser.</h1>
                <p className='text-slate-700 font-light'>Allez de plus en plus loin dans le développement web en apprenant à votre rythme. Passez du temps à revoir les fondamenteaux ou à découvrir de nouvelles technologies.</p>
                <span className=''>Allez de plus en plus loin dans le développement web en apprenant à votre rythme. Passez du temps à revoir les fondamenteaux ou à découvrir de nouvelles technologies.</span>
            </LandingIntro>
            <LandingList parent='cours' data={data} />
        </section>
    )
}

export async function getStaticProps() {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery(['technologies'], () => fetchTechnologies())
    await queryClient.prefetchQuery(['difficulties'], () => fetchDifficulties())
    await queryClient.prefetchQuery(['tags'], () => fetchTags())
    await queryClient.prefetchQuery(['courses', null], () => fetchCourses(null))

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}