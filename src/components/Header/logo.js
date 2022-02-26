import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LogoSvg from '../../../public/potedev.svg'

export const Logo = () => {
    return (
        <Link href='/' >
            <a className="pr-10">
                <span className="sr-only">Pote.dev</span>
                <Image
                    src={LogoSvg}
                    alt="Pote.dev"
                    width={120}
                />
            </a>
        </Link>
    )
}