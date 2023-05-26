import React, { useState } from 'react'
import { AiOutlineLogout } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import { GrFormClose } from 'react-icons/gr'
import { BiUserCircle, BiDotsHorizontalRounded } from 'react-icons/bi'

const Sidebar = () => {
    const [menuPop, setMenuPop] = useState(false)



    return (
        <div>
            <div className='bg-primary h-screen w-52 flex flex-col justify-between p-4'>
                <p className='text-3xl font-bold px-4 ' >IMS</p>
                <ul className='flex flex-col gap-2 w-full  '>
                    <li className='sidebar-link'>Institute</li>
                    <li className='sidebar-link'>Course</li>
                    <li className='sidebar-link'>Teachers</li>
                    <li className='sidebar-link'>Students</li>
                    <li className='sidebar-link z'>Staff</li>
                </ul>
                <div>
                    <div onClick={() => (setMenuPop(true))}
                        className={`w-10 h-10 text-2xl font-bold flex items-center justify-center  bg-dark rounded-full shadow-md shadow-gray-600 cursor-pointer hover:w-11 hover:h-11  hover:text-3xl fixed bottom-10 transition-all ease-in duration-200 ${menuPop ? 'hidden' : 'block'}`}>
                        <BiDotsHorizontalRounded />
                    </div>
                    <div onClick={() => (setMenuPop(false))}
                        className={`z-10 w-10 h-10 text-2xl font-bold flex items-center justify-center  bg-dark rounded-full shadow-md shadow-gray-600 cursor-pointer hover:w-11 hover:h-11 hover:text-3xl fixed bottom-10 transition-all ease-in duration-200 ${menuPop ? 'block' : 'hidden'}`}>
                        <GrFormClose />
                    </div> 

                    <div className={`fixed bottom-14 left-10 bg-dark py-6 rounded-md text-lg transition-all ease-in-out duration-100 shadow-md shadow-gray-500  ${menuPop ? 'opacity-1 ' : 'opacity-0'}`}>
                        <ul>
                            <li className='hover:bg-yellow-500 w-full px-8 cursor-pointer py-1 flex items-center gap-2'> <BiUserCircle />Profile</li>
                            <li className='hover:bg-yellow-500 w-full px-8 cursor-pointer py-1 flex items-center gap-2'> <FiSettings />Settings</li>
                            <li className='hover:bg-yellow-500 w-full px-8 cursor-pointer py-1 flex items-center gap-2' > <AiOutlineLogout />Logout</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar