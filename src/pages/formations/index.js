import React, { useState } from 'react'
import { dehydrate, QueryClient } from 'react-query'
import { useFormations, fetchFormations, fetchTechnologies, fetchDifficulties } from '../../hooks'

import { LandingIntro } from '../../components/LandingPage/landingIntro'
import { TechnologiesAndDifficultyFilters } from '../../components/LandingPage/technologiesAndDifficultyFilters'
import { LandingList } from '../../components/LandingPage/landingList'

export default function () {

    const [difficultyFilter, setDifficultyFilter] = useState(null)
    const [technologyFilter, setTechnologyFilter] = useState(null)

    const currentFilters = difficultyFilter || technologyFilter
        ? { difficulty: difficultyFilter, technology: technologyFilter }
        : null

    const { data } = useFormations(currentFilters)

    const handleTechnologiesAndDifficultyFilters = ({ difficulty, technology }) => {
        setDifficultyFilter(difficulty)
        setTechnologyFilter(technology)
    }

    return (
        <section className='min-h-full max-w-7xl mx-auto px-4 mt-10'>
            <LandingIntro bgColor='dark-blue-900'>
                <h1>Des <strong className='text-dark-blue-900 font-light'>formations</strong> pour <br /> tous les niveaux.</h1>
                <p className='text-slate-700 font-light'>Allez de plus en plus loin dans le développement web en apprenant à votre rythme. Passez du temps à revoir les fondamenteaux ou à découvrir de nouvelles technologies.</p>
                <span className=''>Allez de plus en plus loin dans le développement web en apprenant à votre rythme. Passez du temps à revoir les fondamenteaux ou à découvrir de nouvelles technologies.</span>
            </LandingIntro>
            <TechnologiesAndDifficultyFilters handleFilters={handleTechnologiesAndDifficultyFilters} />
            <div className='flex flex-row'>
                <LandingList parent='formations' data={data} itemType={"Formation"}/>
            </div>
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