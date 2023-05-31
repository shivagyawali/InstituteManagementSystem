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
    <div className='fixed top-0 z-20'>
      <div className={`p-2 text-xl font-bold bg-primary rounded-md cursor-pointer mx-1 my-2 lg:hidden hover:bg-dark ${minimize ? 'hidden' : 'inline-block'}`} onClick={() => (setMinimize(true))}>
        <AiOutlineMenu />
      </div>
      <div className={`bg-primary h-screen lg:w-52 w-34 fixed flex flex-col p-4 lg:block ${minimize ? 'top-0 left-0 ' : 'top-0 -left-48 lg:left-0'} shadow-lg shadow-black transition-all duration-300 ease-in-out`}>
        <div className="text-3xl font-bold px-4 pt-6 pb-12 flex items-center gap-10 ">
          <p >IMS</p>
          <GrFormClose onClick={() => (setMinimize(false))} className="lg:hidden hover:bg-dark rounded-md cursor-pointer" />
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
            className={` w-10 h-10 text-2xl font-bold flex items-center justify-center  bg-dark rounded-full shadow-md shadow-gray-600 cursor-pointer hover:w-11 hover:h-11 hover:text-3xl fixed bottom-10 transition-all ease-in duration-200 ${
              menuPop ? "hidden" : "block"
            }`}
          >
            <BiDotsHorizontalRounded onClick={() => setMenuPop(true)} />
          </div>
          <div
            onClick={() => setMenuPop(false)}
            className={`z-10 w-10 h-10 text-2xl font-bold flex items-center justify-center  bg-dark rounded-full shadow-md shadow-gray-600 cursor-pointer hover:w-11 hover:h-11 hover:text-3xl fixed bottom-10 transition-all ease-in duration-200 ${
              menuPop ? "block" : "hidden"
            }`}
          >
            <GrFormClose onClick={() => setMenuPop(false)} />
          </div>

          <div
            className={` fixed bottom-14 left-10 bg-dark py-6 rounded-md text-lg transition-all ease-in-out duration-100 shadow-md shadow-gray-500  ${
              menuPop ? "opacity-1 " : "opacity-0"
            }`}
          >
            <ul>
              <Link to='/profile'><li className="hover:bg-yellow-500 w-full px-8 cursor-pointer py-1 flex items-center gap-2">
                <BiUserCircle className="w-4 h-4 " />
                Profile
              </li></Link>
              <Link to="/settings"> <li className="hover:bg-yellow-500 w-full px-8 cursor-pointer py-1 flex items-center gap-2">
                <FiSettings className="w-4 h-4 " />
                Settings
              </li>
              </Link>
              <Link to="/login">
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
