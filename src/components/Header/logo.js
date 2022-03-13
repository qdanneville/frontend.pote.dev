import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LogoSvg from '../../../public/potedev.svg'
import BackgroundImage from '../../../public/potedev-background.png'

export const Logo = () => {
    return (
        <Link href='/' >
            <a className="mr-10 py-4">
                <span className="sr-only">Pote.dev</span>
                <div className='flex justify-center items-center relative pt-1'>
                    <div className='absolute -z-10 scale-150 top-0 left-0'>
                        <Image
                            src={BackgroundImage}
                            alt="Pote.dev"
                        />
                    </div>
                    <figure className='rounded-full bg-yellow-900 flex justify-center items-center w-16 h-16 shadow-xl'>
                        <Image
                            src={LogoSvg}
                            alt="Pote.dev"
                            width={35}
                        />
                    </figure>
                    <div className='flex flex-col ml-4'>
                        <h1 className='text-4xl font-light text-dark-blue-900 -mb-1 pb-0'>Pote.<strong className='text-salmon-900'>dev</strong></h1>
                        <p className='text-md font-light text-dark-blue-900 mt-0 pt-0'>E-learning</p>
                    </div>
                </div>
            </a>
        </Link>
    )
}