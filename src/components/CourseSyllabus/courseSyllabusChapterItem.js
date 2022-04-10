import React, { useState } from 'react'
import Link from 'next/link'

import { ArrowSmRightIcon } from '@heroicons/react/outline'
import { Transition } from '@headlessui/react';

import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export const CourseSyllabusChapterItem = (props) => {

    const [currentHoveredItem, setCurrentHoveredItem] = useState("")

    return (
        <li className="w-full relative">
            <div className='bg-white rounded-2xl relative p-2'>
                {props.index && <div className='absolute top-2 -left-[35px] md:-left-[80px] w-full flex justify-start items-center'>
                    <span className='px-3 md:px-4 py-1 bg-yellow-900 rounded-lg text-base md:text-xl shadow-sm'>{props.index}</span>
                </div>}
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="relative flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <div className='flex flex-col'>
                                    <span className='text-xl text-dark-blue-900'>{props.title}</span>
                                    <span className='text-sm text-slate-600'>{props.lessons.length} leçons</span>
                                </div>
                                <ChevronUpIcon
                                    className={`${open ? 'transform rotate-180' : ''
                                        } w-5 h-5 text-purple-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-2 md:px-4 text-sm text-gray-500 relative my-2">
                                <div className='absolute top-0 left-5 h-full w-1 bg-slate-200 rounded-full'></div>
                                <ul className='flex flex-col justify-start items-start ml-2 md:ml-6 relative'>
                                    {props.lessons?.map((lesson, i) =>
                                        <li key={lesson.title}>
                                            <Link
                                                href={`/cours/${props.courseSlug}/${lesson.slug}`}
                                                className=''
                                            >
                                                <a
                                                    onMouseEnter={() => setCurrentHoveredItem(lesson.title)} onMouseLeave={() => setCurrentHoveredItem("")}
                                                    className='hover:pr-7 hover:underline hover:bg-slate-100 hover:text-dark-blue-900 duration-200 ease relative rounded-full py-1 px-4 mr-1 mb-2 capitalize flex flex-row items-center text-md font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-900 focus:ring-offset-2 focus:ring-offset-yellow-900'>
                                                    {lesson.title}
                                                    <Transition
                                                        show={currentHoveredItem === lesson.title}
                                                        enter="duration-200 ease-out"
                                                        enterFrom="opacity-0 -translate-x-2"
                                                        enterTo="opacity-100 translate-x-0"
                                                        leave="duration-100 ease-in"
                                                        leaveFrom="opacity-100 translate-x-0"
                                                        leaveTo="opacity-0 translate-x-0"
                                                        className='absolute right-3'
                                                    >
                                                        <span className='-mr-2 ml-2 w-5 h-5 bg-yellow-900 rounded-full flex justify-center items-center font-bold text-dark-blue-900'><ArrowSmRightIcon className='w-4 h-4' /></span>
                                                    </Transition>
                                                </a>
                                            </Link>
                                        </li>
                                    )
                                    }
                                </ul>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
            {!props.last && <div className='w-full border-dashed border-b-2 border-slate-300 my-4'></div>}
        </li>
    )
}