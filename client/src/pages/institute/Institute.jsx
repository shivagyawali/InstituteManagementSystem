import React from 'react'
import Sidebar from '../../components/Sidebar'
import { Link } from 'react-router-dom'
import Header from '../../components/layouts/Header'

const Institute = () => {
    return (
        <div>
            <div className='lg:w-1/5'>
                <Sidebar />
            </div>
            <div className='w-full text-center'>
                <Header headerText={`Institute's Information`} />
                <div className='flex flex-col items-center w-full pt-28 text-left gap-10 ' >
                    <table className='w-3/6 border-2 border-primary ' >
                        <tr className='border-2 border-primary text-center '>
                            <th className='border-2 border-primary w-1/3 p-2 '>Institutes</th>
                            <th className='border-2 border-primary w-1/3 p-2'>Address</th>
                            <th className='border-2 border-primary w-1/3 p-2'>Pan/Vat</th>
                        </tr>
                        <tr className='border-2 border-primary text-center'>
                            <td className='border-2 border-primary p-2'>Lorem ipsum</td>
                            <td className='border-2 border-primary p-2'>Butwal</td>
                            <td className='border-2 border-primary p-2'>123456789</td>
                        </tr>

                    </table>
                    <Link
                        to={'/addinstitute'}>
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

export default Institute