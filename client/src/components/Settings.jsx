import React from 'react'
import Header from './layouts/Header'

const Settings = () => {
  return (
    <div className='w-full text-center'>
        <Header headerText='Settings'/>
        <div>
<div className='w-1/3 m-auto pt-10 flex flex-col gap-5 text-left'>
    <p className='py-2 px-1 border-2 border-b-dark border-t-white border-r-white border-l-white text-3xl font-bold w-80'>Account Settings</p>
    <div className='p-2 border-2 border-b-dark border-t-white border-r-white border-l-white flex flex-col items-center '>
        <p className='py-2 px-1 bg-primary  rounded-md text-center text-xl font-bold w-80'> Information</p>
        <p className='py-2 px-1 bg-primary  rounded-md text-center text-xl font-bold w-80 mt-5'> Security</p>
    </div>
</div>
        </div>
    </div>
  )
}

export default Settings