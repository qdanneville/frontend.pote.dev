import React, { useState } from 'react'
// import { useAllFormations } from '../../hooks/useFormations'
import { useFormations } from '../../hooks/useFormations'
import { FormationItem } from './formationItem'
import { FormationFilter } from './formationFilter'

export const FormationList = () => {
    const [difficultyFilter, setDifficultyFilter] = useState(null)
    const [technologyFilter, setTechnologyFilter] = useState(null)

    const { data } = useFormations(difficultyFilter || technologyFilter ? { difficulty: difficultyFilter, technology: technologyFilter } : null)

    const handleFormationsFilter = ({ difficulty, technology }) => {
        setDifficultyFilter(difficulty)
        setTechnologyFilter(technology)
    }

    return (
        <div className='flex flex-col'>
            <FormationFilter handleFormationsFilter={handleFormationsFilter} />
            <ul className='flex flex-wrap flex-row justify-between'>
                {
                    data?.map((formation) => (
                        <FormationItem key={formation.title} {...formation} />
                    ))
                }
            </ul>
        </div>
    )
}
