import React from 'react'
import Sidebar from './Sidebar'
import Header from './layouts/Header'
import { Link } from 'react-router-dom'

const Course = () => {
    return (
        <div>
        <div className='lg:w-1/5'>
            <Sidebar />
        </div>
        <div className='w-full text-center'>
            <Header headerText={`Add Course`} />
            <div className='flex flex-col items-center w-full pt-28 text-left gap-10 ' >
                <table className='w-3/6 border-2 border-primary ' >
                    <tr className='border-2 border-primary text-center '>
                        <th className='border-2 border-primary w-1/3 p-2 '>COURSE</th>
                        <th className='border-2 border-primary w-1/3 p-2'>FEE</th>
                        <th className='border-2 border-primary w-1/3 p-2'>DESCRIPTION</th>
                    </tr>
                    <tr className='border-2 border-primary text-center'>
                        <td className='border-2 border-primary p-2'>Lorem ipsum</td>
                        <td className='border-2 border-primary p-2'>Rs. 12345</td>
                        <td className='border-2 border-primary p-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nobis sint numquam perspiciatis commodi reprehenderit praesentium, magni fugit excepturi repudiandae sunt iste sit adipisci! Animi unde veniam beatae at corrupti.</td>
                    </tr>

                </table>
                <Link
                    to={'/addcourse'}>
                    <button
                        className='bg-primary py-2 px-4 rounded-md hover:bg-dark'
                    >
                        Add
                    </button>
                </Link>
            </div>
        </div>
    </div>
    )
}

export default Course