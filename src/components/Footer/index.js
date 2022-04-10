import React from 'react'
import Link from 'next/link'
import { navigationList } from '../Header'

import { MailIcon, ExternalLinkIcon } from '@heroicons/react/outline'


import { Logo } from '../Header/logo'

export const Footer = () => {
    return <footer className='w-full flex flex-col'>
        <div className='relative z-40 min-h-full w-full pt-20 mt-20  max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start border-t-2 border-slate-200'>
            <div className='flex flex-col items-start mb-6 md:mb-0'>
                <Logo />
            </div>
            <div className='flex flex-col justify-center md:justify-start items-center md:items-start md:mt-0 mt-4'>
                <span className='font-medium text-lg mb-2'>Menu</span>
                <ul className='flex flex-col items-center md:items-start'>
                    {
                        navigationList.map(nav => (
                            <li key={nav.label}>
                                <Link key={nav.link} href={nav.link}>
                                    <a className="mb-3 md:mb-1 flex items-center text-dark-blue-900 hover:underline text-base rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-yellow-900 focus-visible:ring-offset-yellow-900 focus-visible:ring-offset-2 focus-visible:border-yellow-900">{nav.label}</a>
                                </Link>
                            </li>)
                        )
                    }
                </ul>
            </div>
            <div className='flex flex-col items-center md:items-end justify-center md:justify-start md:mt-0 mt-4'>
                <span className='font-medium text-lg mb-2'>Me contacter</span>
                <ul className='flex flex-col items-center md:items-end'>
                    <li className='flex mb-3 md:mb-1 items-center'>
                        <a href="https://twitter.com/QuentinFrontDev" className='text-base hover:underline flex items-center'><ExternalLinkIcon className='w-5 h-5 mr-1' />Par email</a>
                    </li>
                    <li className='flex mb-3 md:mb-1 items-center'>
                        <a href="https://twitter.com/QuentinFrontDev" className='text-base hover:underline flex items-center'><ExternalLinkIcon className='w-5 h-5 mr-1' />Twitter</a>
                    </li>
                    <li className='flex mb-3 md:mb-1 items-center'>
                        <a href="https://github.com/qdanneville" className='text-base hover:underline flex items-center'><MailIcon className='w-5 h-5 mr-1' />Github</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className='flex items-center justify-center mt-4 mb-5 md:mb-0'>
            <span className='text-base font-light mt-4'>Développé et conçu par <a className="underline font-medium" href='https://twitter.com/QuentinFrontDev'>@Quentin Danneville</a></span>
        </div>
    </footer>
}