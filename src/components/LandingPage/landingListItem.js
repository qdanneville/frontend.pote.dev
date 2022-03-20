import React from 'react'
import Link from 'next/link'
import { Transition } from '@headlessui/react';

import { Difficulty } from '../Common/difficulty';
import { TechnologiesList } from '../Common/technologiesList';
import { TagsList } from '../Common/tagsList';
import { Chapters } from '../Common/chapters';
import { Courses } from '../Common/courses';

export const LandingListItem = (props) => {
    return (
        <Transition
            appear={true}
            show={true}
            enter="duration-200 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            className={`relative flex flex-1 rounded-lg ring-1 ring-dark-blue-900 m-1 bg-white basis-full md:basis-1/3 lg:basis-1/5 ${props.index && 'mb-6'}`}
        >
            {props.index && <div className='absolute top-32 -left-[85px] w-full flex justify-start items-center'>
                <span className='px-4 py-1 bg-yellow-900 rounded-lg text-xl shadow-sm'>{props.index}</span>
            </div>}
            <Link href={{ pathname: `/${props?.parent}/${props?.slug}`, query: props.from ? { label: props.from.label, link:props.from.link }: null }}>
                <a className={`relative flex flex-col flex-1 justify-between overflow-hidden ${props.parent}`}>
                    <div className='absolute top-0 w-full flex justify-end items-center'>
                        <span className='px-4 py-1 bg-slate-200 rounded-bl-lg text-xs shadow-sm'>{props.itemType}</span>
                    </div>
                    <header className='pt-6 px-4 flex flex-col text-ellipsis mt-4'>
                        <h3 className={`font-bold text-lg text-dark-blue-900`}>{props.title}</h3>
                        {props.technologies && <TechnologiesList technologies={props.technologies} />}
                        <hr className='my-3' />
                        {props.description && <p className='text-slate-500'>{props.description}</p>}
                    </header>
                    {props.tags &&
                        <main className='px-4 my-4'>
                            <TagsList tags={props.tags} />
                        </main>
                    }
                    <footer className="flex justify-self-end py-6 px-4 mt-4 justify-between bg-yellow-500">
                        {props.difficulty && <Difficulty difficulty={props.difficulty} />}
                        {props.chapters && <Chapters chaptersLength={props.chapters.length} />}
                        {props.nbCourses && <Courses coursesLength={props.nbCourses} />}
                    </footer>
                </a>
            </Link>
        </Transition>
    )
}