import React from 'react'

export const Difficulty = ({ difficulty, large }) => {
    return <div className=''>
        <span className={`${large && 'text-lg'} text-sm capitalize px-2 py-1 bg-white rounded-lg shadow-sm text-dark-blue-900`}>{difficulty}</span>
    </div>
}