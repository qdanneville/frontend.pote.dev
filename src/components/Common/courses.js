import React from 'react'

export const Courses = ({ coursesLength }) => {
    return <div>
        <span className='mx-2 text-base capitalize'><strong className='font-regular'>{coursesLength} </strong>cours</span>
    </div>
}