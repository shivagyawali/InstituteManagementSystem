import React from 'react'

const Header = ({headerText}) => {
    return (
        <div>
            <p className='lg:text-3xl md:text-2xl sm:text-xl text-lg mb-5 sticky lg:relative top-0  lg:top-3  bg-primary p-3 lg:rounded-md text-center lg:inline-block'
            >
               {headerText}
            </p >
        </div>
    )
}

export default Header