import React from 'react'
import Sidebar from '../Sidebar'

const Header = ({headerText}) => {
    return (
        <div>
            <div className='lg:w-1/5'>
                <Sidebar />
            </div>
            <p className='lg:text-3xl md:text-2xl sm:text-xl text-lg mb-5 bg-primary p-3 lg:rounded-md text-center lg:inline-block sticky lg:relative top-0  lg:top-3'
            >
               {headerText}
            </p >
        </div>
    )
}

export default Header