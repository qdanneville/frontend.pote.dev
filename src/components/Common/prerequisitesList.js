import React from 'react'

export const PrerequisitesList = ({ prerequisites }) => {
    return <section className='mb-3 flex'>
        <span className='mr-2'>Prérequis :</span>
        <ul className='flex'> {prerequisites?.map((prerequisite, i) => <li><p className="" key={'prerequisite-' + i}>{prerequisite}</p></li>)}</ul>
    </section>
}