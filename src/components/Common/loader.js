import { Transition } from '@headlessui/react'
import { Fragment } from 'react'

export const Loader = () => {
    return (
        <div className="flex flex-col items-center py-16">
            <div className="w-32 h-32">
                <Transition
                    as={Fragment}
                    show={true}
                    enter="transform transition duration-[400ms]"
                    enterFrom="opacity-0 rotate-[-120deg] scale-50"
                    enterTo="opacity-100 rotate-0 scale-100"
                    leave="transform duration-200 transition ease-in-out"
                    leaveFrom="opacity-100 rotate-0 scale-100 "
                    leaveTo="opacity-0 scale-95 "
                >
                    <div className="w-full h-full bg-white rounded-md shadow-lg" />
                </Transition>
            </div>
        </div>
    )
}