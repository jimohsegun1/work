import React, { useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, Tooltip } from "recharts";
import { MoreHorizontal, Eye, Download, Trash2 } from "lucide-react";

const chartData = [
  { month: "Jan", pending: 60 },
  { month: "Feb", pending: 80 },
  { month: "Mar", pending: 70 },
  { month: "Apr", pending: 65 },
  { month: "May", pending: 67 },
  { month: "Jun", income: 110 },
  { month: "Jul", pending: 100 },
  { month: "Aug", pending: 75 },
  { month: "Sep", pending: 20 },
  { month: "Oct", expance: 80 },
  { month: "Nov", pending: 70 },
  { month: "Dec", pending: 80 },
];

const chartConfig = {
  pending: { label: "Pending (10%)", color: "#4C73FF" },
  income: { label: "Income", color: "#9C73FF" },
  expance: { label: "Expance", color: "#FF4CE2" },
};

const DashboardCharts = () => {
  const [menuOpen, setMenuOpen] = useState(false); // revenue state
  const [customersMenuOpen, setCustomersMenuOpen] = useState(false); // State for Customers menu

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50">
      {/* Revenue Section */}
      <div className="p-4 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">Revenue</h2>
          <div className="relative">
            <button
              className="p-1.5 rounded-full hover:bg-gray-100"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <MoreHorizontal className="h-5 w-5 text-gray-600" />
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-md z-10">
                <div className="p-2">
                  <button className="flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100">
                    <Eye className="mr-2 h-4 w-4 text-gray-600" />
                    View
                  </button>
                  <button className="flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100">
                    <Download className="mr-2 h-4 w-4 text-gray-600" />
                    Export
                  </button>
                  <button className="flex items-center w-full px-3 py-2 text-sm text-red-600 hover:bg-red-100">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Remove
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mt-2">
          <p className="text-4xl font-bold text-gray-800">$112,340</p>
        </div>
        <div className="mt-4">
          <div className="w-full overflow-x-auto">
            <BarChart
              width={window.innerWidth > 768 ? 600 : 350} // Responsive width
              height={200}
              data={chartData}
              layout="horizontal"
              barSize={20}
              className="mx-auto"
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tick={{ fontSize: 12, fill: "#A0AEC0" }}
              />
              <Tooltip cursor={{ fill: "rgba(0, 0, 0, 0.1)" }} />
              <Bar
                dataKey="pending"
                stackId="a"
                fill={chartConfig.pending.color}
              />
              <Bar
                dataKey="income"
                stackId="a"
                fill={chartConfig.income.color}
              />
              <Bar
                dataKey="expance"
                stackId="a"
                fill={chartConfig.expance.color}
              />
            </BarChart>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center mt-4 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: chartConfig.pending.color }}
            ></span>
            <span>Pending (10%)</span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: chartConfig.income.color }}
            ></span>
            <span>Income</span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: chartConfig.expance.color }}
            ></span>
            <span>Expance</span>
          </div>
        </div>
      </div>

      {/* Customers Section */}
      <div className="p-6 bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Customers</h2>
            <p className="text-sm text-gray-500">
              Customers that buy our products
            </p>
          </div>
          {/* Three Dots Menu */}
          <div className="relative">
            <button
              className="p-2 rounded-full hover:bg-gray-100"
              onClick={() => setCustomersMenuOpen((prev) => !prev)}
            >
              <MoreHorizontal className="h-5 w-5 text-gray-600" />
            </button>
            {customersMenuOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-md z-10">
                <div className="p-2">
                  <button className="flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100">
                    <Eye className="mr-2 h-4 w-4 text-gray-600" />
                    View
                  </button>
                  <button className="flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100">
                    <Download className="mr-2 h-4 w-4 text-gray-600" />
                    Export
                  </button>
                  <button className="flex items-center w-full px-3 py-2 text-sm text-red-600 hover:bg-red-100">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Remove
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-6">
          {/* Donut Chart */}
          <div className="relative w-44 h-44">
            <svg viewBox="0 0 36 36" className="w-full h-full">
              {/* Background Circle */}
              <circle
                className="text-gray-200"
                stroke="currentColor"
                strokeWidth="3.5"
                fill="transparent"
                r="16"
                cx="18"
                cy="18"
              />
              {/* Purple Segment */}
              <circle
                className="text-purple-500"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeDasharray="82,100"
                fill="transparent"
                r="16"
                cx="18"
                cy="18"
                strokeLinecap="round"
                transform="rotate(-90 18 18)"
              />
              {/* Green Segment */}
              <circle
                className="text-green-400"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeDasharray="18,100"
                fill="transparent"
                r="16"
                cx="18"
                cy="18"
                strokeLinecap="round"
                transform="rotate(-90 18 18)"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-gray-800">82.3%</span>
              <span className="text-sm text-gray-500">Total</span>
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex flex-col gap-6">
            {/* Daily Customers */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10h11M9 21v-4m0 0l-2.5 2.5m2.5-2.5l2.5 2.5M9 3v4m0 0l-2.5-2.5M9 7L11.5 4.5"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">+18%</p>
                <p className="text-xs text-gray-500">Daily customers</p>
              </div>
            </div>

            {/* Weekly New Customers */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">+14%</p>
                <p className="text-xs text-gray-500">Weekly new customers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 flex justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <span className="block w-4 h-4 rounded-full bg-purple-500"></span>
            <span>Current customers</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="block w-4 h-4 rounded-full bg-green-400"></span>
            <span>New customers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;
