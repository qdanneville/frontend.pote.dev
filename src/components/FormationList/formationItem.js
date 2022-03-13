import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import { CodeIcon } from '@heroicons/react/outline'

export const FormationItem = (props) => {

    return (
        <Transition
            appear={true}
            show={true}
            enter="duration-200 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            className='flex flex-1 h-44 m-2'
        >
            <Link href={`/formations/${props.slug}`}>
                <a className='flex-1'>
                    <div className='flex w-full h-full rounded-lg shadow-lg ring-1 ring-dark-blue-900 bg-white overflow-hidden'>
                        <div className='flex flex-col justify-between flex-1 p-4'>
                            <div className='flex flex-col'>
                                <span className='text-xl font-medium'>{props.title}</span>
                                <div className='flex items-center mt-2'>
                                    <span className='text-slate-600'><CodeIcon className='w-4 h-4' /></span>
                                    <div className='flex items-center justify-start divide-x-2 divide-slate-200 divide-opacity-60 first-letter:rounded-lg divide-solid'>
                                        {props.technologies?.map(technology => <p key={technology} className='text-xs px-2'>{technology}</p>)}
                                    </div>
                                </div>
                            </div>
                            <p><span className='capitalize'>{props.difficulty}</span> - <strong>{props.nbCourses}</strong> chapitres</p>
                        </div>
                        <div className="w-44 bg-yellow-900 relative">
                            {props.imageUrl &&
                                <Image
                                    src={props.imageUrl.includes('unsplash.com') ? props.imageUrl : `https://www.notion.so${props.imageUrl}`}
                                    layout="fill"
                                    alt="Pote.dev"
                                    className="h-full"
                                />}
                        </div>
                    </div>
                </a>
            </Link>
        </Transition>
    )
}