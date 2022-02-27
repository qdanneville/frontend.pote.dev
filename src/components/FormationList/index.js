import React from 'react'
import { useFormations } from '../../hooks/useFormations'
import { FormationItem } from './formationItem'
import { FormationFilter } from './formationFilter'

export const FormationList = () => {
    const { data, isLoading } = useFormations()

    if (isLoading) return <div>Loading</div>

    console.log('formations : ', data);

    return (
        <div className='flex flex-col'>
            <FormationFilter />
            <ul className='flex flex-wrap flex-row flex-container'>
                <div className='flex flex-col flex-1 basis-full lg:basis-5/12 h-auto md:h-36 flex-container-child'>
                    <h1 className="text-4xl font-light text-dark-blue-900">
                        Des <strong>formations</strong> pour tous les <strong>niveaux</strong>
                    </h1>
                    <p className='mt-4'>Allez de plus en plus loin dans le développement web en apprenant à votre rythme. Passez du temps à revoir les fondamenteaux ou à découvrir de nouvelles technologies.</p>
                </div>
                {data?.map((formation) => (
                    <FormationItem key={formation.id} {...formation} />
                ))}
            </ul>
        </div>
    )
}
