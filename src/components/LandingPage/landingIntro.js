import React from 'react'
import Image from 'next/image'
import LogoSvg from '../../../public/potedev.svg'
import { Transition } from '@headlessui/react'

export const LandingIntro = ({ children, bgColor }) => {
    return <section className='flex flex-row justify-evenly mt-20 mb-20'>
        <div className='flex flex-col pr-0 md:pr-20'>
            <div className='text-5xl font-extralight'>{children.filter(child => child.type === 'h1')}</div>
            <div className='text-lg mt-4'>{children.filter(child => child.type === 'p')}</div>
        </div>
        <div className='hidden md:flex h-100'>
            <div className={`rounded-lg shadow-lg p-7 flex flex-col ${bgColor && 'bg-'+bgColor}`}>
                <Transition
                    appear={true}
                    show={true}
                    enter="transition duration-100 ease-out delay-200"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                >
                    <div className='text-lg bg-white px-4 py-3 rounded-2xl shadow-sm w-4/5 font-light text-slate-600'>{children.filter(child => child.type === 'span')}</div>
                </Transition>
                <figure className='self-end rounded-full bg-yellow-900 flex justify-center items-center w-12 h-12 shadow-xl'>
                    <Image
                        src={LogoSvg}
                        alt="Pote.dev"
                        width={25}
                    />
                </figure>
            </div>
        </div>
    </section>
}