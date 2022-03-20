import React from 'react'

export const Courses = ({ coursesLength }) => {
    return <div>
        <span className='text-base capitalize'><strong className='font-regular'>{coursesLength} </strong>cours</span>
    </div>
}