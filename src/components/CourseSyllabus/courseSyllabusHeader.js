import { ClockIcon } from '@heroicons/react/outline'
import { Breadcrumb } from '../Breadcrumb'
import { Difficulty } from '../Common/difficulty'

export const CourseSyllabusHeader = (props) => {

    return <header className='flex bg-salmon-900 py-6'>
        <div className='flex justify-between items-center min-h-full max-w-7xl w-full mx-auto px-4'>
            <div className='flex flex-col justify-between items-start flex-1'>
                <div>
                    <Breadcrumb parent={{ label: 'cours', link: '/cours/' }} item={props.title} dark={true} />
                </div>
                <h1 className='text-white text-6xl pt-10'>{props.title}</h1>
                <div className='flex flex-row justify-start items-center pt-10 mt-10'>
                    <Difficulty difficulty={props.difficulty} large />
                    <span className='text-sm text-white flex items-center ml-3'><ClockIcon className="h-6 w-6 mr-1" aria-hidden="true" /> 15 heures</span>
                </div>
            </div>
        </div>
    </header>
}