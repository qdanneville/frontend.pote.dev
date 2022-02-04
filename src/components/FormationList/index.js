import React from 'react'
import Link from 'next/link'
import { useFormations } from '../../hooks/useFormations'

export const FormationList = () => {
    const { data, isLoading } = useFormations()

    if (isLoading) return <div>Loading</div>

    return (
        <section>
            <ul className='formation-list'>
                {data?.map((formation, index) => (
                    <li key={formation.id}>
                        <div>
                            <span>{index + 1}. </span>
                            <Link href={`/formations/${formation.slug}`}>
                                <a>{formation.title}</a>
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}
