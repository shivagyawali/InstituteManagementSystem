import React from 'react'
import Sidebar from './Sidebar'

const Institute = () => {
  return (
    <div>
      <Sidebar />
      <div className='flex items-center justify-center mt-20 pl-24 '>
        <form className='flex flex-col gap-14 w-96 text-lg font-medium'>
          <div className='flex flex-col gap-2  '>
            <label htmlFor="name">ORGANIZATION's NAME </label>
            <input type='text' name='name' className='border-2 border-primary focus:ring-1 focus:ring-primary focus:border-primary active:outline-none active:ring-1 active:ring-primary active:border-primary rounded-md font-normal text-md text-gray-900' />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="address" className='text-xl'>ADDRESS </label>
            <input type='text' name='address' className='border-2 border-primary focus:ring-1 focus:ring-primary focus:border-primary active:outline-none active:ring-1 active:ring-primary active:border-primary rounded-md font-normal text-md text-gray-900' />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="name" className='text-xl'>P.A.N / V.A.T No. </label>
            <input type='number' name='name' className='border-2 border-primary focus:ring-1 focus:ring-primary focus:border-primary active:outline-none active:ring-1 active:ring-primary active:border-primary rounded-md font-normal text-md text-gray-900' />
          </div>
          <button type='submit' className='bg-primary py-2 rounded-md hover:bg-dark' >Save</button>
        </form>
      </div>
    </div>
  )
}

export default Institute