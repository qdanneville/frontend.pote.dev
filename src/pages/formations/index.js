import React from 'react'
import { dehydrate, QueryClient } from 'react-query'
import { fetchFormations, fetchTechnologies, fetchDifficulties } from '../../hooks'

import {LandingIntro} from '../../components/LandingPage/landingIntro'
import { FormationList } from '../../components/FormationList'

export default function () {
    return (
        <section className='min-h-full max-w-7xl mx-auto px-4 mt-10'>
            <LandingIntro bgColor='bg-blue-900'>
                <h1>Des <strong className='text-blue-900 font-light'>formations</strong> pour <br /> tous les niveaux.</h1>
                <p className='text-slate-700 font-light'>Allez de plus en plus loin dans le développement web en apprenant à votre rythme. Passez du temps à revoir les fondamenteaux ou à découvrir de nouvelles technologies.</p>
                <span className=''>Allez de plus en plus loin dans le développement web en apprenant à votre rythme. Passez du temps à revoir les fondamenteaux ou à découvrir de nouvelles technologies.</span>
            </LandingIntro>
            <FormationList />
        </section>
    )
}

export async function getStaticProps() {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery(['formations', null], () => fetchFormations(null))
    await queryClient.prefetchQuery(['technologies'], () => fetchTechnologies())
    await queryClient.prefetchQuery(['difficulties'], () => fetchDifficulties())

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}