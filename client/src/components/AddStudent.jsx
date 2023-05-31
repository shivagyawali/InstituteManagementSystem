import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import Header from './layouts/Header'

const AddStudent = () => {
    return (
            <div className='w-full text-center'>
                <Header headerText="Add Student"/>
                <form className='flex flex-col items-center w-full py-20 text-left gap-10 ' >
                    <div className='flex md:flex-row flex-col md:justify-between gap-10 lg:gap-10 md:gap-5 px-10 w-full'>
                        <div className='flex flex-col gap-2 md:w-1/3'>
                            <label
                                htmlFor="photo"
                            >Photo:
                            </label>

                            <input
                                id='photo'
                                type='file'
                                className='w-full cursor-pointer font-normal text-md text-gray-900 border-none focus:ring-0 focus:ring-none focus:border-none active:outline-none focus:outline-none active:ring-0 active:ring-none active:border-none'
                            />
                        </div>
                        <div className='flex flex-col gap-2 md:w-1/3'>
                            <label
                                htmlFor="name"
                            >
                                NAME:
                            </label>
                            <input
                                id='name' type='text' className='w-full input-section font-normal text-md text-gray-900'
                            />
                        </div>

                        <div className='flex flex-col gap-2 md:w-1/3'>
                            <label
                                htmlFor="address"
                            >
                                Address:
                            </label>
                            <input
                                id='address'
                                type='text'
                                className='input-section font-normal text-md text-gray-900'
                            />
                        </div>

                    </div>

                    <div className='flex md:flex-row flex-col md:justify-between gap-10 lg:gap-10 md:gap-5 px-10 w-full'>
                        <div className='flex flex-col gap-4 md:w-1/3 '>
                            <label>Gender:</label>
                            <div className='flex gap-3 '>
                                <div className='flex items-center gap-2 text-sm '>
                                    <input
                                        id='male'
                                        type='radio'
                                        value='male'
                                        name='gender'
                                        className='border-primary focus:ring-1 focus:ring-primary focus:border-primary active:outline-none active:ring-1 active:ring-primary active:border-primary text-primary w-3 h-3'
                                    />
                                    <label
                                        htmlFor='male'
                                    >
                                        Male
                                    </label>
                                </div>
                                <div className='flex items-center gap-2 text-sm'>
                                    <input
                                        id='female'
                                        type='radio'
                                        value='female'
                                        name='gender'
                                        className='border-primary focus:ring-1 focus:ring-primary focus:border-primary active:outline-none active:ring-1 active:ring-primary active:border-primary text-primary w-3 h-3'
                                    />
                                    <label
                                        htmlFor='female'
                                    >
                                        Female
                                    </label>
                                </div>
                                <div className='flex items-center gap-2 text-sm '>
                                    <input
                                        id='others'
                                        type='radio'
                                        value='others'
                                        name='gender'
                                        className='border-primary focus:ring-1 focus:ring-primary focus:border-primary active:outline-none active:ring-1 active:ring-primary active:border-primary text-primary w-3 h-3'
                                    />
                                    <label
                                        htmlFor='others'
                                    >Others
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 md:w-1/3'>
                            <label
                                htmlFor="dob"
                            >Date of Birth:
                            </label>
                            <input
                                id='dob'
                                type='date'
                                className='input-section font-normal text-md text-gray-900 w-full'
                            />
                        </div>
                        <div className='flex flex-col gap-2 md:w-1/3'>
                            <label
                                htmlFor="identity"
                            >
                                Citizenship No.:
                            </label>
                            <input
                                id='identity'
                                type='number'
                                className='input-section font-normal text-md text-gray-900'
                            />
                        </div>
                    </div>
                    <div className='flex md:flex-row flex-col md:justify-between gap-10 lg:gap-10 md:gap-5 px-10 w-full'>
                        <div className='flex flex-col gap-2 md:w-1/3'>
                            <label
                                htmlFor="phonenumber"
                            >
                                Phone Number:
                            </label>
                            <input
                                id='phonenumber'
                                type='number'
                                className='input-section font-normal text-md text-gray-900'
                            />
                        </div>
                        <div className='flex flex-col gap-2 md:w-1/3'>
                            <label
                                htmlFor="email"
                            >
                                Email:
                            </label>
                            <input
                                name='email'
                                type='email'
                                className='input-section font-normal text-md text-gray-900 w-full'
                            />
                        </div>
                        <div className='flex flex-col gap-2 md:w-1/3'>
                            <label
                                htmlFor="courses"
                            >
                                Courses: </label>
                            <input
                                id='courses'
                                type='text'
                                className='input-section font-normal text-md text-gray-900 w-full'
                            />
                        </div>
                    </div>
                    <div className='flex md:flex-row flex-col md:justify-between gap-10 lg:gap-10 md:gap-5 px-10 w-full'>
                        <div className='flex flex-col gap-2 md:w-1/3'>
                            <label
                                htmlFor="batch"
                            >
                                Batch:
                            </label>
                            <input
                                id='batch'
                                type='number'
                                className='input-section font-normal text-md text-gray-900 w-full'
                            />
                        </div>
                        <div className='flex flex-col gap-2 md:w-1/3'>
                            <label
                                htmlFor="qualification"
                            >
                                Qualifications:
                            </label>
                            <input
                                id='qualification'
                                type='text'
                                className='input-section font-normal text-md text-gray-900 w-full'
                            />
                        </div>
                    </div>

                    <div className='flex gap-10'>
                        <Link to={'/students'}>
                            <button
                                className='bg-gray-400 py-2 px-4 rounded-md hover:bg-gray-500 hover:text-white'
                            >Back
                            </button>
                        </Link>
                        <button
                            type='submit'
                            className='bg-primary py-2 px-4 rounded-md hover:bg-dark'
                        >
                            Save
                        </button>
                    </div>

                </form>
            </div>
    )
}

export default AddStudent