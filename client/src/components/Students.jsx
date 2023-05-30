import React from 'react'
import Sidebar from './Sidebar'
import Header from './layouts/Header'
import { Link } from 'react-router-dom'
import StdImg from '../assets/Exams-bro.svg'

const Students = () => {
    return (
        <div>
            <div className='lg:w-1/5'>
                <Sidebar />
            </div>
            <div className='text-center lg:ml-32'>
                <Header headerText={`Students's Information`} />
                <div className='md:flex items-center justify-center flex-1 pt-28 gap-10 overflow-x-scroll md:overflow-x-hidden m-auto lg:ml-10' >
                    <table className=' w-5/6 border-2 border-primary  ' >
                        <tr className='border-2 border-primary text-center text-sm'>
                            <th className='border-2 border-primary p-2'>Photo</th>
                            <th className='border-2 border-primary p-2'>NAME</th>
                            <th className='border-2 border-primary p-2'>Address</th>
                            <th className='border-2 border-primary p-2'>Gender</th>
                            <th className='border-2 border-primary p-2'>Date of Birth</th>
                            <th className='border-2 border-primary p-2'>Citizenship No</th>
                            <th className='border-2 border-primary p-2'>Phone Number</th>
                            <th className='border-2 border-primary p-2'>Email</th>
                            <th className='border-2 border-primary p-2'>Courses</th>
                            <th className='border-2 border-primary p-2'> Batch</th>
                            <th className='border-2 border-primary p-2'>Qualification</th>
                        </tr>
                        <tr className='border-2 border-primary text-center text-sm'>
                            <td className='border-2 border-primary p-2'><img src={StdImg} className='border-2 border-primary rounded-full w-10 m-auto' /></td>
                            <td className='border-2 border-primary p-2'>Hari Shrivastav</td>
                            <td className='border-2 border-primary p-2'>980123456</td>
                            <td className='border-2 border-primary p-2'>Male</td>
                            <td className='border-2 border-primary p-2'>2005-10-22</td>
                            <td className='border-2 border-primary p-2 '>123-456-789</td>
                            <td className='border-2 border-primary p-2 '>980987654</td>
                            <td className='border-2 border-primary p-2'>abc@gmail.com</td>
                            <td className='border-2 border-primary p-2'>Bridge course   </td>
                            <td className='border-2 border-primary p-2'>2080</td>
                            <td className='border-2 border-primary p-2'>SEE</td>
                        </tr>

                    </table>
                </div>
                <Link
                    to={'/addstudent'}>
                    <button
                        className='bg-primary py-2 px-4 rounded-md hover:bg-dark mt-20'
                    >
                        Add
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Students
