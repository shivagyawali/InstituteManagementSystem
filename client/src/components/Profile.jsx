import React from 'react'
import Header from './layouts/Header'
import ProfileImg from '../assets/Exams-bro.svg'

const Profile = () => {
    return (
        <div>
            <Header />
            <div className='w-1/3 m-auto flex items-center justify-center'>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <img src={ProfileImg} className='w-36 rounded-full border-4 border-dark object-cover'/>
                    <p className='text-3xl font-extrabold text-dark'>Ram</p>
                </div>
            </div>
        </div>
    )
}

export default Profile