import Link from 'next/link'
import { HomeIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'


export const Breadcrumb = ({ parent, item, dark }) => {

    const router = useRouter()

    return (
        <div className={` ${dark && 'bg-white'} hidden md:flex items-center rounded-lg shadow-lg ring-1 ring-slate-500 py-2 px-4`}>
            <Link href={'/'}><a className={`${dark ? 'text-dark-blue-900 hover:bg-slate-100 hover:text-dark-blue-900' : 'text-white hover:bg-slate-100 hover:text-dark-blue-900'}  px-2`}><HomeIcon className='w-6 h-6' /></a></Link>

            {router.query.label && router.query.link && <>
                <span className='text-slate-500'><ChevronRightIcon className='w-5 h-5' /></span>
                <Link href={'/formations/'}><a className='text-slate-500 font-regular capitalize hover:bg-slate-100 px-2 hover:text-dark-blue-900'>{'formations'}</a></Link>
                <span className='text-slate-500'><ChevronRightIcon className='w-5 h-5' /></span>
                <Link href={router.query.link}><a className='text-slate-500 font-regular hover:bg-slate-100 px-2 hover:text-dark-blue-900'>{router.query.label}</a></Link>
            </>}

            <span className='text-slate-500'><ChevronRightIcon className='w-5 h-5' /></span>
            <Link href={parent.link}><a className={`${dark ? 'text-slate-500 hover:bg-slate-100 hover:text-dark-blue-900' : 'text-white hover:bg-slate-100 hover:text-dark-blue-900'} font-regular capitalize hover:bg-slate-100 px-2`}>{parent.label}</a></Link>
            <span className='text-slate-500'><ChevronRightIcon className='w-5 h-5' /></span>
            <span className={`${dark ? 'text-dark-blue-900' : 'text-yellow-900'}  font-medium`}>{item}</span>
        </div >
    )
}