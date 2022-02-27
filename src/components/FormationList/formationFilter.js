import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const levels = [
    { name: 'débutant' },
    { name: 'intermédiaire' },
    { name: 'confirmé' },
]

const technologies = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'Javascript' },
    { name: 'Python' },
]

export const FormationFilter = () => {
    const [selectedLevel, setSelectedLevel] = useState(levels[0])
    const [selectedTechnology, setSelectedTechnology] = useState(technologies[0])

    return <div className='flex justify-end md:flex-row flex-col items-end'>
        <div className="w-72 z-20 flex items-center">
            <Listbox value={selectedLevel} onChange={setSelectedLevel}>
                <Listbox.Label>Niveau</Listbox.Label>
                <div className="relative mt-1 flex-1 ml-3">
                    <Listbox.Button className="cursor-pointer relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-yellow focus-visible:ring-offset-yellow focus-visible:ring-offset-2 focus-visible:border-yellow sm:text-sm">
                        <span className="block truncate capitalize">{selectedLevel.name}</span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <SelectorIcon
                                className="w-5 h-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {levels.map((level, levelIdx) => (
                                <Listbox.Option
                                    key={levelIdx}
                                    className={({ active }) =>
                                        `select-none relative py-2 pl-10 pr-2 hover:bg-gray-50 rounded-md cursor-pointer ${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'
                                        }`
                                    }
                                    value={level}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block p-2 truncate capitalize ${selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                            >
                                                {level.name}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                    <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
        <div className="w-72 z-10 flex items-center ml-0 md:ml-6 mt-3 md:mt-0">
            <Listbox value={selectedTechnology} onChange={setSelectedTechnology}>
                <Listbox.Label>Technologies</Listbox.Label>
                <div className="relative mt-1 flex-1 ml-3">
                    <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-yellow focus-visible:ring-offset-yellow focus-visible:ring-offset-2 focus-visible:border-yellow sm:text-sm">
                        <span className="block truncate capitalize">{selectedTechnology.name}</span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <SelectorIcon
                                className="w-5 h-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {technologies.map((technology, technologyIdx) => (
                                <Listbox.Option
                                    key={technologyIdx}
                                    className={({ active }) =>
                                        `select-none relative py-2 pl-10 pr-4 hover:bg-gray-50 rounded-md cursor-pointer ${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'
                                        }`
                                    }
                                    value={technology}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate capitalize ${selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                            >
                                                {technology.name}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                    <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    </div>
}