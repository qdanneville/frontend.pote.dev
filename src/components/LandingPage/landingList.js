import React from 'react'
import { LandingListItem } from './landingListItem'

export const LandingList = ({ data, parent, itemType }) => {

    return (
        <div className='flex flex-1 flex-row justify-start'>
            <ul className='flex flex-1 flex-wrap flex-row justify-between'>
                {
                    data?.map((data) => (
                        <LandingListItem key={data.title} {...data} parent={parent} itemType={itemType}/>
                    ))
                }
            </ul>
        </div>
    )
}