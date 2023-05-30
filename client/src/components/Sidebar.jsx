import { useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { FaSchool, FaUserGraduate, FaUserTie, FaReadme } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import { GiTeacher } from "react-icons/gi";
import { BiUserCircle, BiDotsHorizontalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [menuPop, setMenuPop] = useState(false);

  return (
    <div className="fixed top-0">
      <div className="bg-primary h-screen w-52 flex flex-col p-4 ">
        <p className="text-3xl font-bold px-4 py-12">IMS</p>
        <ul className="flex flex-col gap-2 w-full  ">
          <Link to={"/institute"}>
            <li className={`sidebar-link flex items-center gap-2`}>
              <FaSchool className="text-3xl" />
              Institute
            </li>
          </Link>
          <Link to={"/course"}>
            <li className="sidebar-link flex items-center gap-2">
              <FaReadme className="text-3xl" />
              Course
            </li>
          </Link>
          <Link to={"/teachers"}>
            <li className="sidebar-link flex items-center gap-2">
              <GiTeacher className="text-3xl" />
              Teachers
            </li>
          </Link>
          <Link to={"/students"}>
            <li className="sidebar-link flex items-center gap-2">
              <FaUserGraduate className="text-3xl" />
              Students
            </li>
          </Link>
          <Link to={"/staffs"}>
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
              <li className="hover:bg-yellow-500 w-full px-8 cursor-pointer py-1 flex items-center gap-2">
                <BiUserCircle className="w-4 h-4 " />
                Profile
              </li>
              <li className="hover:bg-yellow-500 w-full px-8 cursor-pointer py-1 flex items-center gap-2">
                <FiSettings className="w-4 h-4 " />
                Settings
              </li>
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
