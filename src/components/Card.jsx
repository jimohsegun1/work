import React from "react";

const Card = ({ title, value, icon, bgColor }) => {
  return (
    <div
      className={`cursor-pointer bg-white shadow-sm p-6 rounded-lg flex flex-col items-start gap-4 space-x-4 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg`}
    >
      <div
        className={`h-12 w-12 rounded-full flex items-center justify-center ${bgColor} text-white`}
      >
        {icon}
      </div>
      <div>
        <div className="mb-4">
          <p className="text-gray-500 text-sm">{title}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">{value}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
