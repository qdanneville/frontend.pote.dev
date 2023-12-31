import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { Logo } from './logo'

import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon, AcademicCapIcon, BookOpenIcon, PuzzleIcon } from '@heroicons/react/outline'

export const navigationList = [
    {
        label: "Formation",
        link: "/formations",
        icon: <AcademicCapIcon className="h-6 w-6 mr-2" />
    },
    {
        label: "Cours",
        link: "/cours",
        icon: <BookOpenIcon className="h-6 w-6 mr-2" />
    },
    // {
    //     label: "Projets",
    //     link: "/projets",
    //     icon: <PuzzleIcon className="h-6 w-6 mr-2" />
    // }
]

export const Header = () => {

    const router = useRouter();

    return (
        <Popover className="relative z-50 min-h-full max-w-7xl mx-auto px-4">
            <header className='flex justify-between md:flex-1 items-center py-4'>
                <Logo />
                <ul className='hidden md:flex flex-1 space-x-6 lg:justify-center md:justify-start'>
                    {
                        navigationList.map(nav => (
                            <li key={nav.label}>
                                <Link key={nav.link} href={nav.link}>
                                    <a className={`${router.pathname.includes(nav.link) && 'text-salmon-900 bg-slate-200'} flex items-center text-dark-blue-900 hover:bg-slate-200 font-medium p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-yellow-900 focus-visible:ring-offset-yellow-900 focus-visible:ring-offset-2 focus-visible:border-yellow-900`}>{nav.label}</a>
                                </Link>
                            </li>)
                        )
                    }
                </ul>
                <ul className='hidden md:flex items-center'>
                    <li>
                        <Link href={'/inscription'}>
                            <a className='p-2'>S'inscrire</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/connexion'}>
                            <a className='button ml-4'>Se connecter</a>
                        </Link>
                    </li>
                </ul>
                <div className="-my-2 md:hidden">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-yellow-900 focus-visible:ring-offset-yellow-900 focus-visible:ring-offset-2 focus-visible:border-yellow-900">
                        <span className="sr-only">Open menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                </div>
            </header>
            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute top-0 inset-x-0 py-4 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <Logo />
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-900">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    {navigationList.map((nav) => (
                                        <Link key={nav.label}
                                            href={nav.link}>
                                            <a className="-m-3 p-3 flex items-start justify-start rounded-md hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-yellow-900 focus-visible:ring-offset-yellow-900 focus-visible:ring-offset-2 focus-visible:border-yellow-900">
                                            <Popover.Button className={`w-full text-left ${router.pathname === nav.link && 'text-salmon-900'} ml-3 text-base font-medium`}>{nav.label}</Popover.Button>
                                            </a>
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div>
                                <Link href={'/inscription'}>
                                    <a className="w-full relative"><Popover.Button className='button'>S'inscrire</Popover.Button></a>
                                </Link>
                                <p className="mt-6 text-center text-base font-light text-gray-500">
                                    Déjà inscrit ?{' '}
                                    <Link href={'/connexion'}>
                                        <a className="font-medium text-dark-blue-900 hover:text-dark-blue-500 relative">
                                            <Popover.Button className='focus:outline-none focus:ring-2 focus:ring-yellow-900 focus:ring-offset-2 focus:ring-offset-yellow-900'>Se connecter</Popover.Button>
                                        </a>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}