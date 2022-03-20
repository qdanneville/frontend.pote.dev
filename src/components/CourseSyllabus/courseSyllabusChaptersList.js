import React from 'react'
import { CourseSyllabusChapterItem } from './courseSyllabusChapterItem'

export const CourseSyllabusChaptersList = ({ chapters }) => {
    return <section className='pt-10'>
        <h4 className='text-2xl text-dark-blue-900 mb-8'>Liste des chapitres du cours</h4>
        <div className='relative'>
            <div className='absolute top-0 left-5 h-full w-1 bg-slate-200 rounded-full'></div>
            <ul className='px-10 rounded-lg mt-10 relative ml-10'>
                {chapters?.map((chapter, index) => <CourseSyllabusChapterItem key={chapter.title} {...chapter} index={index+1}/>)}
            </ul>
        </div>
    </section>
}