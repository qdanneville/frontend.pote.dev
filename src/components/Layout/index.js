import React from 'react'
import {Header} from '../Header'

export const Layout = ({ children }) => {
    return <div className='min-h-full max-w-7xl mx-auto px-4'>
        <Header/>
        {children}
    </div>
}