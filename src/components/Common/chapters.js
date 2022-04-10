import React from 'react'

export const Chapters = ({ chaptersLength }) => {
    return <div>
        <span className='mx-2 text-base capitalize'><strong className='font-regular'>{chaptersLength} </strong>chapitres</span>
    </div>
}