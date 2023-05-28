import { useState } from "react";
import { AiOutlineLogout, AiOutlineMenu } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { FaSchool, FaUserGraduate, FaUserTie, FaReadme } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import { GiTeacher } from "react-icons/gi";
import { BiUserCircle, BiDotsHorizontalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [menuPop, setMenuPop] = useState(false);
  const [minimize, setMinimize] = useState(false);


  return (
    <div className='fixed top-0'>
      <div className={`p-2 text-xl bg-primary rounded-md cursor-pointer mx-1 my-2 md:hidden  ${minimize ? 'hidden' : 'inline-block'}`} onClick={() => (setMinimize(true))}>
        <AiOutlineMenu />
      </div>
      <div className={`bg-primary h-screen w-52 flex flex-col p-4 md:block ${minimize ? 'block' : 'hidden'} `}>
        <div className="text-3xl font-bold px-4 pt-6 pb-12 flex items-center justify-between ">
          <p >IMS</p>
          <GrFormClose onClick={() => (setMinimize(false))} className="md:hidden" />
        </div>
        <ul className="flex flex-col gap-2 w-full  ">
          <Link to={'/institute'} >
            <li className={`sidebar-link flex items-center gap-2`}>
              <FaSchool className="text-3xl" />
              Institute
            </li>
          </Link>
          <Link to={'/course'}>
            <li className="sidebar-link flex items-center gap-2">
              <FaReadme className="text-3xl" />
              Course
            </li>
          </Link>
          <Link to={'/teachers'}>
            <li className="sidebar-link flex items-center gap-2">
              <GiTeacher className="text-3xl" />
              Teachers
            </li>
          </Link>
          <Link to={'/students'}>
            <li className="sidebar-link flex items-center gap-2">
              <FaUserGraduate className="text-3xl" />
              Students
            </li>
          </Link>
          <Link to={'/staffs'}>
            <li className="sidebar-link flex items-center gap-2">
              <FaUserTie className="text-3xl" />
              Staffs
            </li>
          </Link>
        </ul>
        <div>
          <div
            onClick={() => setMenuPop(true)}
            className={` w-10 h-10 text-2xl font-bold flex items-center justify-center  bg-dark rounded-full shadow-md shadow-gray-600 cursor-pointer hover:w-11 hover:h-11 hover:text-3xl fixed bottom-10 transition-all ease-in duration-200 ${menuPop ? "hidden" : "block"
              }`}
          >
            <BiDotsHorizontalRounded />
          </div>
          <div
            onClick={() => setMenuPop(false)}
            className={`z-10 w-10 h-10 text-2xl font-bold flex items-center justify-center  bg-dark rounded-full shadow-md shadow-gray-600 cursor-pointer hover:w-11 hover:h-11 hover:text-3xl fixed bottom-10 transition-all ease-in duration-200 ${menuPop ? "block" : "hidden"
              }`}
          >
            <GrFormClose />
          </div>

          <div
            className={` fixed bottom-14 left-10 bg-dark py-6 rounded-md text-lg transition-all ease-in-out duration-100 shadow-md shadow-gray-500  ${menuPop ? "opacity-1 " : "opacity-0"
              }`}
          >
            <ul>
              <li className="hover:bg-yellow-500 w-full px-8 cursor-pointer py-1 flex items-center gap-2">
                {" "}
                <BiUserCircle />
                Profile
              </li>
              <li className="hover:bg-yellow-500 w-full px-8 cursor-pointer py-1 flex items-center gap-2">
                {" "}
                <FiSettings />
                Settings
              </li>
              <Link to='/login'>
                <li className="hover:bg-yellow-500 w-full px-8 cursor-pointer py-1 flex items-center gap-2">
                  {" "}
                  <AiOutlineLogout />
                  Logout
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
