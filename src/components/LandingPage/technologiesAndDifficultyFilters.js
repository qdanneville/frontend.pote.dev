import { useState } from 'react'
import { useDifficulties, allDifficultiesFilter } from '../../hooks/useDifficulties'
import { useTechnologies, allTechnologiesFilter } from '../../hooks/useTechnologies'

export const TechnologiesAndDifficultyFilters = ({ handleFilters }) => {

    const { data: difficulties } = useDifficulties()
    const { data: technologies } = useTechnologies()

    const [selectedDifficulty, setSelectedDifficulty] = useState(difficulties ? difficulties[0] : allDifficultiesFilter)
    const [selectedTechnology, setSelectedTechnology] = useState(technologies ? technologies[0] : allTechnologiesFilter)

    const handleDifficultyFilter = (event) => {
        handleFilters({ difficulty: event.target.value, technology: selectedTechnology })
        setSelectedDifficulty(event.target.value)
    }

    const handleTechnologyFilter = (event) => {
        handleFilters({ technology: event.target.value, difficulty: selectedDifficulty })
        setSelectedTechnology(event.target.value)
    }

    return <div className="flex justify-end md:flex-row flex-col items-end mx-2">
        <div className="mb-3 flex items-center w-72 z-20">
            <label className='text-dark-blue-900 font-medium text-base mr-2'>Niveau :</label>
            <select
                value={selectedDifficulty} onChange={handleDifficultyFilter}
                className="flex-1 cursor-pointer relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-yellow-900 focus-visible:ring-offset-yellow-900 focus-visible:ring-offset-2 focus-visible:border-yellow-900 sm:text-sm">
                {difficulties?.map(difficulty => <option key={difficulty.name ? difficulty.name : difficulty}>{difficulty.name ? difficulty.name : difficulty}</option>)}
            </select>
        </div>
        <div className="ml-3 mb-3 flex items-center w-72 z-20">
            <label className='text-dark-blue-900 font-medium text-base mr-2'>Technologies :</label>
            <select
                value={selectedTechnology} onChange={handleTechnologyFilter}
                className="flex-1 cursor-pointer relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-yellow-900 focus-visible:ring-offset-yellow-900 focus-visible:ring-offset-2 focus-visible:border-yellow-900 sm:text-sm">
                {technologies?.map(technology => <option key={technology.name ? technology.name : technology}>{technology.name ? technology.name : technology}</option>)}
            </select>
        </div>
    </div>
}