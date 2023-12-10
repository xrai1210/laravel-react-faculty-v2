import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import PLMLogo from "../assets/PLM-logo.png";
import { MdOutlineDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiBookletLine } from "react-icons/ri";
import { LuFolderSearch } from "react-icons/lu";
import { RiFileLine } from "react-icons/ri";
import { LuFileEdit } from "react-icons/lu";
import { MdLockOutline } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";
import Button from "./Button";

const FacultyLayout = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const showSidebar = () => {
    setIsSidebarVisible((prevState) => !prevState);
  };

  return (
    <div className="flex-row min-h-screen font-poppins md:flex md:h-screen bg-antiquewhite">
      <aside className="relative w-full text-duststorm bg-maroon md:h-screen md:w-2/5 lg:w-1/5">
        <div className="p-2 border-b">
          <img className="w-16" src={PLMLogo} alt="PLM Logo" />
        </div>

        <ul className="flex flex-row justify-around py-2 md:flex-col">
          <li className="mx-2 md:my-1 md:py-4 ">
            <Link to="/faculty/dashboard">
              <button className="flex flex-row items-center">
                <MdOutlineDashboard className="h-7 w-7 md:mx-2" />
                <span className="hidden md:block">Dashboard</span>
              </button>
            </Link>
          </li>

          <li className="mx-2 md:my-1 md:py-4 ">
            <Link to="/faculty/profile">
              <button className="flex items-center cursor-pointer">
                <CgProfile className="h-7 w-7 md:mx-2" />
                <span className="hidden md:block">Profile</span>
              </button>
            </Link>
          </li>

          <li className="mx-2 md:my-1 md:py-4 ">
            <Link to="/faculty/class-assignment">
              <button className="flex items-center cursor-pointer">
                <RiBookletLine className="h-7 w-7 md:mx-2" />
                <span className="hidden md:block">Class Assignment</span>
              </button>
            </Link>
          </li>

          <li className="mx-2 md:my-1 md:py-4 ">
            <Link to="/faculty/class-assignment/search">
              <button className="flex items-center cursor-pointer">
                <LuFolderSearch className="h-7 w-7 md:mx-2" />
                <span className="hidden md:block">Search Class Assignment</span>
              </button>
            </Link>
          </li>

          <li className="mx-2 md:my-1 md:py-4 ">
            <Link to="/faculty/grades">
              <button className="flex items-center cursor-pointer">
                <RiFileLine className="h-7 w-7 md:mx-2" />
                <span className="hidden md:block">Grading Sheet</span>
              </button>
            </Link>
          </li>

          <li className="mx-2 md:my-1 md:py-4 ">
            <Link to="/faculty/grades/update">
              <button className="flex items-center cursor-pointer">
                <LuFileEdit className="h-7 w-7 md:mx-2" />
                <span className="hidden md:block">Update Grade</span>
              </button>
            </Link>
          </li>

          <li
            className="mx-2 cursor-pointer md:my-1 md:hidden md:py-4"
            onClick={showSidebar}
          >
            <GiHamburgerMenu className="h-7 w-7 md:mx-2" />
          </li>
        </ul>

        <ul className="flex-col justify-around hidden md:flex">
          <li className="pt-4 mx-2 my-4 border-t-2">
            <Link to="/faculty/change-password">
              <button className="flex items-center cursor-pointer">
                <MdLockOutline className="h-7 w-7 md:mx-2" />
                <span className="hidden md:block">Change Password</span>
              </button>
            </Link>
          </li>

          <li className="py-4 mx-2 my-4 bg-red-800 rounded-lg ">
            <Link to="/faculty">
              <button className="flex items-center justify-center cursor-pointer">
                <MdLogout className="h-7 w-7 md:mx-2" />
                <span className="hidden md:block">Logout</span>
              </button>
            </Link>
          </li>
        </ul>
      </aside>

      {isSidebarVisible && (
        <div className="absolute top-0 z-50 w-full h-screen bg-white bg-opacity-50">
          <div className="float-right w-1/2 h-full p-2 bg-white">
            <div className="absolute z-50 right-2 top-2" onClick={showSidebar}>
              <IoIosClose className="mx-2 cursor-pointer w-7 h-7" />
            </div>

            <div className="flex flex-row items-center justify-center w-full h-full">
              <div className="flex flex-col justify-center w-full">
                <Button color="maroon text-white" label="Change Password" />

                <Button color=" bg-red-500 text-white" label="Logout" />
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="relative w-full p-2 md:w-3/5 lg:w-4/5 md:overflow-y-auto md:overscroll-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default FacultyLayout;
