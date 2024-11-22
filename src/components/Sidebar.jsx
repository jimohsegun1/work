import React, { useState } from "react";

const Sidebar = () => {
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated);
  };

  return (
    <div className="w-64 h-screen bg-white shadow-lg flex flex-col">
      <div className="flex items-center px-6 py-4">
        <div className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center text-white text-lg font-bold">
          <img src="images/logoframe.png" alt="" />
        </div>
        <div>
          <h1 className="ml-3 text-2xl font-semibold text-gray-800 font-crete">
            Chucky
          </h1>
          <h3 className="ml-3 text-sm text-gray-800 font-crete">
            Admin Dashboard
          </h3>
        </div>
      </div>

      {/* Navigatn Menu */}
      <nav className="flex-1 mt-6 px-4">
        <ul className="space-y-4">
          <li>
            <a
              href="#"
              className="flex items-center text-gray-600 hover:bg-purple-700 hover:text-purple-50 px-4 py-2 rounded-lg transition"
            >
              <img src="images/Activity.png" alt="" className="mr-3 " />
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-600 hover:bg-purple-700 hover:text-purple-50 px-4 py-2 rounded-lg transition"
              onClick={handleClick}
            >
              <img src="images/bag.png" alt="" className="mr-3" />
              Orders
              <img
                src="images/action.png"
                alt=""
                className={`ml-10 transition-transform duration-300 ${
                  isRotated ? "rotate-90" : ""
                }`}
              />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-600 hover:bg-purple-700 hover:text-purple-50 px-4 py-2 rounded-lg transition"
            >
              <img src="images/chart.png" alt="" className="mr-3" />
              Analytics
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-600 hover:bg-purple-700 hover:text-purple-50 px-4 py-2 rounded-lg transition"
            >
              <img src="images/users.png" alt="" className="mr-3" />
              Customer
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center text-gray-600 hover:bg-purple-700 hover:text-purple-50 px-4 py-2 rounded-lg transition"
            >
              <img src="images/menu.png" alt="" className="mr-3" />
              Menu
            </a>
          </li>
        </ul>
      </nav>

      {/* Subscription Section */}
      <div className="relative p-4 bg-gray-100 border rounded-md shadow-md w-52 mb-8 m-auto">
        <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
          ✕
        </button>

        {/* Circular Progress and Details */}
        <div className="flex flex-col items-start space-y-4">
          {/* Circular Progress */}
          <div className="relative w-16 h-16">
            <svg className="w-16 h-16 transform -rotate-90">
              <circle
                cx="32"
                cy="32"
                r="28"
                strokeWidth="4"
                className="text-gray-200"
                fill="transparent"
                stroke="currentColor"
              />
              <circle
                cx="32"
                cy="32"
                r="28"
                strokeWidth="4"
                className="text-purple-500"
                fill="transparent"
                strokeDasharray="176"
                strokeDashoffset="24.64"
                strokeLinecap="round"
                stroke="currentColor"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-semibold text-gray-900">86%</span>
            </div>
          </div>

          {/* Subscription Details */}
          <div>
            <p className="text-sm font-semibold text-gray-900">
              Subscription Plan
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Your subscription plan will expire soon. Please upgrade!
            </p>
            <a
              href="#"
              className="text-sm text-purple-500 mt-2 inline-block hover:underline"
            >
              Upgrade
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
