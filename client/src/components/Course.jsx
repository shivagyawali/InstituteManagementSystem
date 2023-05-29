import React from 'react'
import Sidebar from './Sidebar'

const Course = () => {
    return (
        <div>
            <div className='lg:w-1/5'>
                <Sidebar />
            </div>
            <div className='w-full text-center'>
                <p className='lg:text-3xl md:text-2xl sm:text-xl text-lg mb-5 sticky lg:relative top-0  lg:top-3  bg-primary p-3 lg:rounded-md text-center lg:inline-block'
                >
                    Student's Information
                </p>
                <form className='flex flex-col items-center w-full py-20 text-left gap-10 ' >
                    <div className='flex flex-col justify-center lg:items-center gap-10 lg:gap-10 md:gap-5 px-10 w-full'>
                        <div className='flex flex-col gap-2 lg:w-1/3'>
                            <label htmlFor="name">COURSE NAME </label>
                            <input name='name' type='text' className='input-section font-normal text-md text-gray-900 w-full' />
                        </div>
                        <div className='flex flex-col gap-2 lg:w-1/3'>
                            <label htmlFor="fee">FEE </label>
                            <input name='fee' type='text' className='input-section font-normal text-md text-gray-900' />
                        </div>
                        <div className='flex flex-col gap-2 lg:w-1/3'>
                            <label htmlFor="description">DESCRIPTION </label>
                            <textarea name='description' type='text' className='input-section font-normal text-md text-gray-900' />
                        </div>
                        </div>
                        <button type='submit' className='bg-primary py-2 px-4 rounded-md hover:bg-dark' >Save</button>
                </form>
            </div>
        </div>
    )
}

export default Course