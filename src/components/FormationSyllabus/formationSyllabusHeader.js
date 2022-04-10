// import { ClockIcon } from '@heroicons/react/outline'
import { Breadcrumb } from '../Breadcrumb'
import { Difficulty } from '../Common/difficulty'
import { Transition } from '@headlessui/react'

export const FormationSyllabusHeader = (props) => {

    return <header className='flex bg-dark-blue-900 py-6'>
        <div className='relative flex justify-between items-center min-h-full max-w-7xl w-full mx-auto px-4'>
            <div className='flex flex-col justify-between items-start flex-1'>
                <div>
                    <Breadcrumb parent={{ label: 'formations', link: '/formations/' }} item={props.title} />
                </div>
                <h1 className='text-white text-4xl pt-10'>{props.title}</h1>
                <div className='flex flex-row justify-start items-center pt-10 mt-10'>
                    <Difficulty difficulty={props.difficulty} large />
                    {/* <span className='text-sm text-white flex items-center'><ClockIcon className="h-6 w-6 mr-1" aria-hidden="true" /> 15 heures</span> */}
                </div>
            </div>
            <div className='h-40 w-40 relative p-4 overflow-hidden hidden md:flex'>
                <Transition
                    appear={true}
                    show={true}
                    enter="transform transition duration-[300ms]"
                    enterFrom="opacity-0 translate-x-20"
                    enterTo="opacity-100 translate-x-0"
                    className={`w-full h-full relative z-10 shadow-lg rounded-lg skew-x-12 bg-yellow-900 flex items-center justify-center`}
                >
                    <span className='text-4xl'>{props.icon}</span>
                </Transition>
            </div>
            {/* <div className='absolute left-0 top-0 h-40 w-40 p-5 overflow-hidden'>

            </div> */}
            <Transition
                appear={true}
                show={true}
                enter="transform transition duration-[300ms]"
                enterFrom="opacity-0 -translate-x-20"
                enterTo="opacity-100 translate-x-0"
                className={`hidden md:flex right-8 absolute h-32 w-32 rounded-lg -skew-x-12 bg-yellow-500 items-center justify-center`}
            >
            </Transition>
        </div>
    </header>
}