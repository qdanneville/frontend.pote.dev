import React from 'react'

export const Chapters = ({ chaptersLength }) => {
    return <div>
        <span className='text-base text-dark-blue-900 capitalize'><strong className='font-regular'>{chaptersLength} </strong>chapitres</span>
    </div>
}