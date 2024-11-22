import React from "react";
import { FaSearch } from "react-icons/fa";
import { HiOutlineBell } from "react-icons/hi";
import { HiOutlineEnvelope } from "react-icons/hi2";

const Topbar = () => {
  return (
    <div className="w-full h-20 bg-white flex items-center justify-between px-6 shadow-sm border-b border-gray-200">
      {/* Left Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Hi, Taylor!</h1>
          <p className="text-sm text-gray-500">Let's check your store today</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 sm:space-x-6">
        <div className="relative hidden sm:block">
          <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-72 bg-gray-100 py-2 pl-10 pr-4 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="relative">
          <HiOutlineEnvelope className="text-gray-500 text-lg cursor-pointer hover:text-purple-500" />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </div>

        <div className="relative">
          <HiOutlineBell className="text-gray-500 text-lg cursor-pointer hover:text-purple-500" />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            5
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <img
            src="images/profileImg.png"
            alt="Profile"
            className="h-10 w-10 rounded-full border border-gray-200 object-cover"
          />
          <span className="text-gray-700 font-medium text-sm sm:text-base">
            Tynish Obey
          </span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
