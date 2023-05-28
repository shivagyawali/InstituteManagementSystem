import React from 'react'
import Sidebar from './Sidebar'

const Students = () => {
    return (
        <div>
            <Sidebar />
            <div className='flex items-center justify-center mt-20 lg:pl-24'>

                <form className='flex flex-col gap-8 text-lg font-medium w-1/3 ' >
                    <div className='flex flex-col gap-2'>
                        <label
                            htmlFor="photo"
                        >Photo:
                        </label>

                        <input
                            id='photo'
                            type='file'
                            className='cursor-pointer font-normal text-md text-gray-900 border-none focus:ring-0 focus:ring-none focus:border-none active:outline-none focus:outline-none active:ring-0 active:ring-none active:border-none'
                        />
                    </div>

                    <div className='flex justify-between gap-10'>
                        <div className='flex flex-col gap-2'>
                            <label
                                htmlFor="name"
                            >
                                NAME:
                            </label>
                            <input
                                id='name' type='text' className='input-section font-normal text-md text-gray-900'
                            />
                        </div>

                        <div className='flex flex-col gap-2 '>
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

                    <div className='flex justify-between gap-10'>
                        <div className='flex flex-col gap-4 '>
                            <label>Gender:</label>
                            <div className='flex gap-3'>
                                <div className='flex items-center gap-2 text-sm'>
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
                                <div className='flex items-center gap-2 text-sm'>
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
                        <div className='flex flex-col gap-2 '>
                            <label
                                htmlFor="dob"
                            >Date of Birth:
                            </label>
                            <input
                                id='dob'
                                type='date'
                                className='input-section font-normal text-md text-gray-900'
                            />
                        </div>
                    </div>
                    <div className='flex justify-between gap-10'>
                        <div className='flex flex-col gap-2 '>
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
                        <div className='flex flex-col gap-2 '>
                            <label
                                htmlFor="email"
                            >
                                Email:
                            </label>
                            <input
                                name='email'
                                type='email'
                                className='input-section font-normal text-md text-gray-900'
                            />
                        </div>
                    </div>
                    <div className='flex justify-between gap-10'>
                        <div className='flex flex-col gap-2 '>
                            <label
                                htmlFor="courses"
                            >
                                Courses: </label>
                            <input
                                id='courses'
                                type='text'
                                className='input-section font-normal text-md text-gray-900'
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label
                                htmlFor="batch"
                            >
                                Batch:
                            </label>
                            <input
                                id='batch'
                                type='number'
                                className='input-section font-normal text-md text-gray-900'
                            />
                        </div>
                    </div>
                    <div className='flex justify-between gap-10'>
                        <div className='flex flex-col gap-2'>
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
                        <div className='flex flex-col gap-2'>
                            <label
                                htmlFor="qualification"
                            >
                                Qualifications:
                            </label>
                            <input
                                id='qualification'
                                type='text'
                                className='input-section font-normal text-md text-gray-900'
                            />
                        </div>
                    </div>

                    <button type='submit' className='bg-primary py-2 rounded-md hover:bg-dark' >Save</button>

                </form>
            </div>
        </div>
    )
}

export default Students