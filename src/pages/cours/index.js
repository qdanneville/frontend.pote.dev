import React, { useState } from 'react'
import { dehydrate, QueryClient } from 'react-query'
import { fetchCourses, fetchTechnologies, fetchDifficulties, fetchTags, fetchAllCoursesSlug,  useCourses, useTags } from '../../hooks'

import { LandingIntro } from '../../components/LandingPage/landingIntro'
import { TechnologiesAndDifficultyFilters } from '../../components/LandingPage/technologiesAndDifficultyFilters'
import { LandingList } from '../../components/LandingPage/landingList'
import { LandingAsideFilters } from '../../components/LandingPage/landingAsideFilters'

export default function () {
    const [difficultyFilter, setDifficultyFilter] = useState(null)
    const [technologyFilter, setTechnologyFilter] = useState(null)
    const [tagsFilter, setTagsFilter] = useState([])

    const currentFilters = difficultyFilter || technologyFilter || tagsFilter.length > 0
        ? { difficulty: difficultyFilter, technology: technologyFilter, tags: tagsFilter }
        : null

    const { data } = useCourses(currentFilters)
    const { data: tags } = useTags()

    const handleTechnologiesAndDifficultyFilters = ({ difficulty, technology }) => {
        setDifficultyFilter(difficulty)
        setTechnologyFilter(technology)
    }

    return (
        <section className='min-h-screen max-w-7xl mx-auto px-4 mt-10'>
            <LandingIntro bgColor='salmon-900'>
                <h1>Des <strong className='text-salmon-900 font-light'>cours</strong> pour <br /> se spécialiser.</h1>
                <p className='text-slate-700 font-light'>Allez de plus en plus loin dans le développement web en apprenant à votre rythme. Passez du temps à revoir les fondamenteaux ou à découvrir de nouvelles technologies.</p>
                <span className=''>Allez de plus en plus loin dans le développement web en apprenant à votre rythme. Passez du temps à revoir les fondamenteaux ou à découvrir de nouvelles technologies.</span>
            </LandingIntro>
            <TechnologiesAndDifficultyFilters handleFilters={handleTechnologiesAndDifficultyFilters} />
            <div className='flex flex-row'>
                <LandingAsideFilters filters={tags} title="tags" handleFilters={setTagsFilter} />
                <LandingList parent='cours' data={data} itemType={"Cours"} />
            </div>
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