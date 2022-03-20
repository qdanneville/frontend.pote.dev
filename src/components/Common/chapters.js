import React from 'react'

export const Chapters = ({ chaptersLength }) => {
    return <div>
        <span className='text-base capitalize'><strong className='font-regular'>{chaptersLength} </strong>chapitres</span>
    </div>
}