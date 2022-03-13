import React from 'react'

export const TagsList = ({ tags }) => {

    console.log('tags list : tags ', tags);

    return <section>
        <ul className='flex flex-row items-center'>
            {
                tags?.map(tag =>
                    <p key={tag.name} className="bg-salmon-500 rounded-full py-1 px-4 mr-1 capitalize flex flex-row items-center text-base">
                        <span className='mr-3'>{tag.icon}</span>{tag.name}
                    </p>
                )
            }
        </ul>
    </section>
}