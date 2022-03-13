import React from 'react'
import Link from 'next/link'
import { Transition } from '@headlessui/react';

import { Difficulty } from '../common/difficulty';
import { TechnologiesList } from '../common/technologiesList';
import { TagsList } from '../common/tagsList';
import { PrerequisitesList } from '../common/prerequisitesList';
import { Chapters } from '../Common/chapters';

export const LandingItem = (props) => {

    console.log('props :', props);
    console.log('props :', props.tags);

    return (
        <Transition
            appear={true}
            show={true}
            enter="duration-200 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            className='flex flex-1 m-2 rounded-lg ring-1 ring-dark-blue-900 bg-white basis-1/4'
        >
            <Link href={`/${props?.parent}/${props?.slug}`}>
                <a className='flex flex-col flex-1 justify-between overflow-hidden'>
                    <header className='pt-6 px-4'>
                        <h3 className='font-bold text-lg text-dark-blue-900'>{props.title}</h3>
                        {props.technologies && <TechnologiesList technologies={props.technologies} />}
                        <hr className='my-3' />
                    </header>
                    <main className='px-4'>
                        {props.prerequisites && <PrerequisitesList prerequisites={props.prerequisites} />}
                        {props.tags && <TagsList tags={props.tags} />}
                    </main>
                    <footer className='flex justify-self-end bg-yellow-500 py-6 px-4 mt-4 justify-between'>
                        {props.difficulty && <Difficulty difficulty={props.difficulty} />}
                        {props.chapters && <Chapters chaptersLength={props.chapters.length} />}
                    </footer>
                </a>
            </Link>
        </Transition>
    )
}