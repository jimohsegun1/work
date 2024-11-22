import React, { useState } from "react";

// Menu Items Data
const menuItems = [
  {
    title: "Surf & Turf Gift Basket",
    price: "$89.24",
    image: "images/Background1.png",
    served: 456,
    category: "Breakfast",
  },
  {
    title: "Shaking Beef Tri-Tip",
    price: "$69.46",
    image: "images/Background2.png",
    served: 456,
    category: "Lunch",
  },
  {
    title: "BBQ Rib Dinner with Delicious Add-ons",
    price: "$69.21",
    image: "images/Background3.png",
    served: 456,
    category: "Dinner",
  },
  {
    title: "Chicken & Ribs Combo",
    price: "$89.49",
    image: "images/Background4.png",
    served: 456,
    category: "Breakfast",
  },
  {
    title: "Fried Chicken Dinner with Spicy Sauce",
    price: "$83.56",
    image: "images/Background5.png",
    served: 456,
    category: "Dinner",
  },
  {
    title: "Dark & Stormy",
    price: "$90.58",
    image: "images/Background6.png",
    served: 456,
    category: "Lunch",
  },
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Category");

  // Filter menu items based on selected category
  const filterMenuItems = () => {
    if (selectedCategory === "All Category") {
      return menuItems;
    }
    return menuItems.filter((item) => item.category === selectedCategory);
  };

  return (
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
        <h2 className="text-xl md:text-2xl font-bold text-center md:text-left">
          Menu
        </h2>
        <div className="flex flex-wrap justify-center md:justify-start space-x-4 text-gray-600">
          {["All Category", "Breakfast", "Lunch", "Dinner"].map((category) => (
            <button
              key={category}
              className={`${
                selectedCategory === category
                  ? "text-purple-600 font-medium border-b-2 border-purple-600"
                  : "hover:text-purple-600"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Top Section: Two Larger Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
        {filterMenuItems()
          .slice(0, 2)
          .map((item, index) => (
            <div
              key={index}
              className={`${
                index === 0 ? "md:col-span-2" : "md:col-span-1"
              } relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 sm:h-48 md:h-56 object-cover"
              />
              {/* Frosted Glass Overlay */}
              <div className="absolute inset-x-0 bottom-4 mx-4 w-auto rounded bg-white/50 backdrop-blur-sm border border-white/30 p-3 sm:p-4">
                <div className="flex justify-between items-center gap-x-2">
                  <div className="w-2/3 truncate">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 truncate">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {item.served} Served
                    </p>
                  </div>
                  <div className="w-1/3 text-right">
                    <p className="text-sm sm:text-lg md:text-xl font-bold text-gray-800">
                      {item.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Bottom Section: Four Equal Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {filterMenuItems()
          .slice(2)
          .map((item, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-32 sm:h-40 object-cover"
              />
              {/* Frosted Glass Overlay */}
              <div className="absolute inset-x-0 bottom-4 mx-4 w-auto rounded bg-white/50 backdrop-blur-sm border border-white/30 p-3 sm:p-4">
                <div className="flex justify-between items-center gap-x-2">
                  <div className="w-2/3 truncate">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 truncate">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {item.served} Served
                    </p>
                  </div>
                  <div className="w-1/3 text-right">
                    <p className="text-sm sm:text-lg md:text-xl font-bold text-gray-800">
                      {item.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Menu;
