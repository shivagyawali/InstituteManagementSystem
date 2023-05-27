import React from 'react'
import Sidebar from './Sidebar'

const Course = () => {
    return (
        <div>
            <Sidebar />
            <div className='flex items-center justify-center mt-20 pl-24'>
                <form className='flex flex-col gap-8 w-96 text-lg font-medium' >
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name">COURSE NAME </label>
                        <input name='name' type='text' className='input-section font-normal text-md text-gray-900' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="fee">FEE </label>
                        <input name='fee' type='text' className='input-section font-normal text-md text-gray-900' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="description">DESCRIPTION </label>
                        <textarea name='description' type='text' className='input-section font-normal text-md text-gray-900' />
                    </div>
                    <button type='submit' className='bg-primary py-2 rounded-md hover:bg-dark' >Save</button>

                </form>
            </div>
        </div>
    )
}

export default Course