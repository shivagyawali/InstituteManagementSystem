import React from 'react'
import Sidebar from './Sidebar'
import Header from './layouts/Header'
import { Link } from 'react-router-dom'

const AddInstitute = () => {
  return (
    <div>
      <div className='lg:w-1/5'>
        <Sidebar />
      </div>
      <div className='w-full text-center'>
        <Header
          headerText={`Add Institute`}
        />

        <form className='flex flex-col items-center w-full py-20 text-left gap-10 ' >
          <div className='flex flex-col justify-center lg:items-center gap-10 lg:gap-10 md:gap-5 px-10 w-full'>
            <div className='flex flex-col gap-2 lg:w-1/3'>
              <label
                htmlFor="name"
              >
                ORGANIZATION's NAME
              </label>
              <input
                type='text'
                name='name'
                className='input-section font-normal text-md text-gray-900 w-full'
              />
            </div>
            <div className='flex flex-col gap-2 lg:w-1/3'>
              <label
                htmlFor="address"
                className='text-xl'
              >
                ADDRESS
              </label>
              <input
                type='text'
                name='address'
                className='input-section font-normal text-md text-gray-900 w-full'
              />
            </div>
            <div className='flex flex-col gap-2 lg:w-1/3'>
              <label
                htmlFor="name"
                className='text-xl'
              >
                P.A.N / V.A.T No.
              </label>
              <input
                type='number'
                name='name'
                className='input-section font-normal text-md text-gray-900 w-full'
              />
            </div>
          </div>

          <div className='flex gap-10'>
            <Link to={'/institute'}>
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
    </div>
  )
}

export default AddInstitute