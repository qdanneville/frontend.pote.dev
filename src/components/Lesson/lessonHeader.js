import React from 'react'
import Link from 'next/link'


import { ArrowSmRightIcon, ArrowSmLeftIcon } from '@heroicons/react/outline'


export const LessonHeader = (props) => {
    return <header className='flex items-center justify-between border-b-4 bg-slate-100 border-dark-blue-900 py-4 sticky top-0'>
        {
            props.prev && <div className='flex items-center'>

                <Link href={`/cours/${props.nav.course.slug}/${props.prev.slug}`}>
                    <a className='text-dark-blue-900 text-sm flex items-center hover:underline'>
                        <span className='w-5 h-5 flex justify-center items-center font-bold'><ArrowSmLeftIcon className='w-4 h-4' /></span>
                        {props.prev.title}
                    </a>
                </Link>
            </div>
        }
        <h1 className='text-xl text-dark-blue-900 font-medium'>{props.title}</h1>
        {
            props.next && <div className='flex items-center'>
                <Link href={`/cours/${props.nav.course.slug}/${props.next.slug}`}>
                    <a className='text-dark-blue-900 text-sm flex items-center hover:underline'>
                        {props.next.title}
                        <span className='w-5 h-5 flex justify-center items-center font-bold'><ArrowSmRightIcon className='w-4 h-4' /></span>
                    </a>
                </Link>
            </div>
        }
    </header>
}