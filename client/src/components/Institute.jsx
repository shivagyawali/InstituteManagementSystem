import React from 'react'
import Sidebar from './Sidebar'

const Institute = () => {
  return (
    <div>
      <div className='lg:w-1/5'>
        <Sidebar />
      </div>
      <div className='w-full text-center'>
        <p className='lg:text-3xl md:text-2xl sm:text-xl text-lg mb-5 sticky lg:relative top-0  lg:top-3  bg-primary p-3 lg:rounded-md text-center lg:inline-block'
        >
          Instiute's Information
        </p>
        <form className='flex flex-col items-center w-full py-20 text-left gap-10 ' >
          <div className='flex flex-col justify-center lg:items-center gap-10 lg:gap-10 md:gap-5 px-10 w-full'>
            <div className='flex flex-col gap-2 lg:w-1/3'>
              <label htmlFor="name">ORGANIZATION's NAME </label>
              <input type='text' name='name' className='input-section font-normal text-md text-gray-900 w-full' />
            </div>
            <div className='flex flex-col gap-2 lg:w-1/3'>
              <label htmlFor="address" className='text-xl'>ADDRESS </label>
              <input type='text' name='address' className='input-section font-normal text-md text-gray-900 w-full' />
            </div>
            <div className='flex flex-col gap-2 lg:w-1/3'>
              <label htmlFor="name" className='text-xl'>P.A.N / V.A.T No. </label>
              <input type='number' name='name' className='input-section font-normal text-md text-gray-900 w-full' />
            </div>
          </div>
          <button type='submit' className='bg-primary py-2 px-4 rounded-md hover:bg-dark' >Save</button>
        </form>
      </div>
    </div>
  )
}

export default Institute