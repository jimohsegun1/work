import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import DashboardCards from "./components/DashboardCards";
import DashboardCharts from "./components/DashBoardCharts";
import CustomersSection from "./components/CustomersSection";
import Menu from "./components/Menu";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-100">
        <Topbar />

        {/* Main Dashboard Contents */}
        <div className="p-6 flex-1">
          <DashboardCards />
          <div className="mt-6">
            <div className="text-xl font-bold">
              <DashboardCharts />
            </div>
          </div>

          <div className="mt-6">
            <div className="text-xl font-bold">
              <CustomersSection />
            </div>
          </div>
          <div className="mt-6">
            <div className="text-xl font-bold">
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
