import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './layouts/Header'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createInstitute } from '../pages/institute/feature/instituteSlice'

const AddInstitute = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: '',
    address: '',
    pan: '',
  })

  const handleSubmit=(e, institute)=>{
    e.preventDefault();
    console.log(data)
    dispatch(createInstitute(institute))
  }
  return (
    <div className='w-full text-center'>
      <Header
        headerText={`Add Institute`}
      />

      <form className='flex flex-col items-center w-full py-20 text-left gap-10 ' onSubmit={handleSubmit}>
        <div className='flex flex-col justify-center lg:items-center gap-10 lg:gap-10 md:gap-5 px-10 w-full'>
          <div className='flex flex-col gap-2 lg:w-1/3'>
            <label
              htmlFor="name"
            >
              ORGANIZATION's NAME
            </label>
            <input
              value={data.name}
              onChange={(e)=>setData({ ...data, name: e.target.value })}
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
              value={data.address}
              onChange={(e)=>setData({ ...data, address: e.target.value })}
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
              value={data.pan}
              onChange={(e)=>setData({ ...data, pan: e.target.value })}
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
  )
}

export default AddInstitute