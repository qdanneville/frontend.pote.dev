import Link from 'next/link'
import React from 'react'

import { ArrowSmRightIcon, ArrowSmLeftIcon } from '@heroicons/react/outline'

export const LessonFooter = (props) => {
    return <footer className='flex justify-between items-center py-10 border-t-4 border-dark-blue-900'>
        {
            props?.prev && <div className='flex-col justify-end items-end hidden md:flex'>
                <span className='text-slate-600 text-sm'>Revenir à la leçon précédente</span>
                <Link href={`/cours/${props.nav.course.slug}/${props.prev.slug}`}>
                    <a className='text-dark-blue-900 text-lg flex items-center hover:underline'>
                        <span className='w-5 h-5 flex justify-center items-center font-bold'><ArrowSmLeftIcon className='w-4 h-4' /></span>
                        {props.prev.title}
                    </a>
                </Link>
            </div>
        }
        {
            props?.next ?
                <Link href={`/cours/${props.nav.course.slug}/${props.next.slug}`}><a className="button mx-4 md:mx-0" >J'ai terminé cette leçon</a></Link>
                : <Link href={`/cours/${props?.nav?.course?.slug}/`}><a className="button" >J'ai terminé ce cours</a></Link>
        }
        {
            props?.next && <div className='flex-col justify-end items-start hidden md:flex'>
                <span className='text-slate-600 text-sm'>Je passe à la leçon suivante</span>
                <Link href={`/cours/${props.nav.course.slug}/${props.next.slug}`}>
                    <a className='text-dark-blue-900 text-lg flex items-center hover:underline'>
                        {props.next.title}
                        <span className='w-5 h-5 flex justify-center items-center font-bold'><ArrowSmRightIcon className='w-4 h-4' /></span>
                    </a>
                </Link>
            </div>
        }

    </footer>
}