import React from 'react'
import Link from 'next/link';

export const LessonNavigation = ({ nav, lessonSlug }) => {

    return <nav className='sticky top-0 pt-4 mr-10'>
        <Link href={`/cours/${nav?.course?.slug}`}><a className="text-xl font-bold mb-2">{nav?.course?.title}</a></Link>
        <ol className='list-decimal my-2 ml-5'>
            {nav?.chapters?.map(chapter =>
                <li key={chapter.title} className="relative">
                    <p className='text-lg text-slate-900 ml-1'>{chapter?.title}</p>
                    <ul className='relative text-slate-700'>
                        <div className='absolute top-0 left-0 h-full w-1 bg-slate-200 rounded-full'></div>
                        {
                            chapter?.lessons?.map(lesson =>
                                <li key={lesson.title} className={`ml-5 text-sm my-1 hover:text-dark-blue-900 pb-1 px-2 ${lessonSlug === lesson.slug && 'font-medium underline text-dark-blue-900'}`}>
                                    <Link href={`/cours/${nav.course.slug}/${lesson.slug}`}>
                                        <a className=''>
                                            {lesson.title}
                                        </a>
                                    </Link>
                                </li>)
                        }
                    </ul>
                </li>
            )}
        </ol>
    </nav>
}