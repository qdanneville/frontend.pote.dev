import React from 'react'
import { LandingItem } from './landingItem'

export const LandingList = ({ data, parent }) => {

    return (
        <div className='flex flex-row justify-start'>
            <aside className='mr-4'>
                <p>Tags</p>
                <ul>
                    <p>fondamenteaux</p>
                    <p>Exercice</p>
                </ul>
            </aside>
            <ul className='flex flex-1 flex-wrap flex-row justify-between'>
                {
                    data?.map((data) => (
                        <LandingItem key={data.title} {...data} parent={parent} />
                    ))
                }
            </ul>
        </div>
    )
}