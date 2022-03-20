import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export const CourseSyllabusChapterItem = (props) => {

    return (
        <div className="w-full relative">
            <div className='bg-white rounded-2xl relative p-2'>
                {props.index && <div className='absolute top-2 -left-[80px] w-full flex justify-start items-center'>
                    <span className='px-4 py-1 bg-yellow-900 rounded-lg text-xl shadow-sm'>{props.index}</span>
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
                            <Disclosure.Panel className="px-4 text-sm text-gray-500 relative my-2">
                                <div className='absolute top-0 left-5 h-full w-1 bg-slate-200 rounded-full'></div>
                                <ul className='flex flex-col justify-start items-start ml-6 relative'>
                                    {props.lessons?.map((lesson, i) =>
                                        <div className='relative flex items-center'>
                                            <i className='w-4 h-4 rounded-full absolute -left-[26px] bg-yellow-900'></i>
                                            <p className='text-base py-4'>{lesson.title}</p>
                                        </div>)
                                    }
                                </ul>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
            <div className='w-full border-dashed border-b-2 border-slate-300 my-4'></div>
        </div>
    )
}