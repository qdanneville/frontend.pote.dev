import React, { useState } from 'react'
import { XIcon } from '@heroicons/react/outline'
import { Transition } from '@headlessui/react';

export const LandingAsideFilters = ({ filters, title, handleFilters }) => {

    const [activeFilters, setActiveFilters] = useState([])

    const handleClickFilter = (filter) => {

        const isAlreadyActiveIndex = activeFilters.findIndex(el => el === filter.name)

        const newFilters = isAlreadyActiveIndex === -1
            ? [...activeFilters, filter.name]
            : activeFilters.filter((_, i) => i !== isAlreadyActiveIndex)

        setActiveFilters(newFilters)
        handleFilters(newFilters);
    }

    return (
        <aside className='flex-col mr-6 hidden md:flex'>
            <p className='text-base capitalize font-medium mb-4'>{title} <span className='text-slate-500 text-xs'>- filtre</span></p>
            <ul className='flex flex-col items-baseline w-44'>
                {filters.map(filter => {
                    const isActive = activeFilters.includes(filter.name)

                    return (
                        <li key={filter.name}>
                            <div
                                className={` ${isActive ? 'opacity-1 pr-7 bg-salmon-500' : 'opacity-60 bg-slate-300 hover:bg-salmon-500'}  duration-200 ease relative  rounded-full py-1 px-4 mr-1 mb-2 capitalize flex flex-row items-center text-xs font-medium cursor-pointer`}
                                onClick={() => handleClickFilter(filter)}
                            >
                                <span className='mr-2'>{filter.icon}</span>
                                {filter.name}
                                <Transition
                                    show={isActive}
                                    enter="duration-200 ease-out"
                                    enterFrom="opacity-0 -translate-x-2"
                                    enterTo="opacity-100 translate-x-0"
                                    leave="duration-100 ease-in"
                                    leaveFrom="opacity-100 translate-x-0"
                                    leaveTo="opacity-0 -translate-x-1"
                                    className='absolute right-3'
                                >
                                    <span className='-mr-2 ml-2 w-4 h-4 bg-[#dda9a9] rounded-full flex justify-center items-center font-bold text-white'><XIcon className='w-3 h-3' /></span>
                                </Transition>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}