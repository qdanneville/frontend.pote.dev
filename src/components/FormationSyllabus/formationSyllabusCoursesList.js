import React from 'react'
import { LandingListItem } from '../LandingPage/landingListItem'

export const FormationSyllabusCoursesList = ({ courses, from }) => {
    return <section className='pt-10'>
        <h4 className='text-2xl text-dark-blue-900 mb-8'>Liste des cours de la formation</h4>
        <div className='relative'>
            <div className='hidden md:flex absolute top-0 left-5 h-full w-1 bg-slate-200 rounded-full'></div>
            <ul className='px-0 md:px-10  rounded-lg mt-0 md:mt-10 relative md:ml-10 ml-0'>
                {courses?.map((course, index) => <LandingListItem key={course.title} {...course} parent={'cours'} itemType={'cours'} index={index + 1} from={from}/>)}
            </ul>
        </div>
    </section>
}