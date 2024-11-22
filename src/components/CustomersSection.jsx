import React from "react";
import CustomerMap from "./CustomerMap";
import CustomerList from "./CustomerList";

const CustomersSection = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-3 md:col-span-2">
        <CustomerMap />
      </div>
      
      <div className="col-span-3 md:col-span-1">
        <CustomerList />
      </div>
    </div>
  );
};

export default CustomersSection;
