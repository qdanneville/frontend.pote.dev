import React from 'react'

export const TagsList = ({ tags }) => {
    return <section>
        <ul className='flex flex-row items-center flex-wrap'>
            {
                tags?.map(tag =>
                    <li key={tag.name}>
                        <p  className="bg-salmon-500 rounded-full py-1 px-4 mr-1 mb-1 capitalize flex flex-row items-center text-xs font-medium">
                            <span className='mr-2'>{tag.icon}</span>{tag.name}
                        </p>
                    </li>
                )
            }
        </ul>
    </section>
}