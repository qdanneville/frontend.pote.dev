import Link from 'next/link'
import { useRouter } from 'next/router'
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/solid'


export const Breadcrumb = ({ parent }) => {

    const router = useRouter()
    const { slug } = router.query

    console.log('router : ', router);

    return (
        <div className='flex items-center rounded-lg shadow-lg ring-1 ring-slate-500 py-2 px-4'>
            <Link href={'/'}><a className='text-white'><HomeIcon className='w-6 h-6' /></a></Link>
            <span className='text-slate-500'><ChevronRightIcon className='w-5 h-5 mx-2' /></span>
            <Link href={parent.link}><a className='text-white font-regular capitalize'>{parent.label}</a></Link>
            <span className='text-slate-500'><ChevronRightIcon className='w-5 h-5 mx-2' /></span>
            <span className='text-white font-regulat capitalize text-yellow'>Apprenez les bases de la programmation web</span>
        </div>
    )
}