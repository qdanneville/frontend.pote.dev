import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

export const FormationItem = (props) => {

    console.log('formation props : ', props);

    return (
        <Link
            href={`/formations/${props.slug}`}
        >
            <a className='flex h-40 flex-1 basis-full xs:basis-5/12 md:basis-5/12 lg:basis-5/12 flex-container-child'>
                <div className='flex w-full h-full rounded-lg shadow-lg ring-1 ring-dark-blue-900 bg-white overflow-hidden'>
                    <div className='flex flex-col justify-between flex-1 p-4'>
                        <div className='flex flex-col'>
                            <span className='text-xl font-medium'>{props.title}</span>
                            <p className='text-xs'>Conception - Javascript - Devops</p>
                        </div>
                        <p>Intermédiaire - <strong>5</strong> chapitres</p>
                    </div>
                    <div className="w-40 bg-yellow relative">
                        <Image
                            src={props.imageUrl.includes('unsplash.com') ? props.imageUrl : `https://www.notion.so${props.imageUrl}`}
                            layout="fill"
                            alt="Pote.dev"
                            className="h-full"
                        />
                    </div>
                </div>
            </a>
        </Link>
    )
}