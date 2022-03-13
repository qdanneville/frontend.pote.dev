import React from 'react'
import { CodeIcon } from '@heroicons/react/outline'

export const TechnologiesList = ({ technologies }) => {
    return <section>
        <div className='flex items-center mt-2'>
            <span className='text-slate-600'><CodeIcon className='w-4 h-4' /></span>
            <div className='flex items-center justify-start divide-x-2 divide-slate-200 divide-opacity-60 first-letter:rounded-lg divide-solid'>
                {technologies?.map(technology => <p key={technology} className='text-xs px-2'>{technology}</p>)}
            </div>
        </div>
    </section>
}