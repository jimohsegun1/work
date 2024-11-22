import React from "react";
import Card from "./Card";

const DashboardCards = () => {
  const cardData = [
    {
      title: "Total Menu",
      value: "345",
      icon: <img src="images/total_menu.png" alt="" />,
      bgColor: "bg-purple-500",
    },
    {
      title: "Total Revenue",
      value: "$37,193.00",
      icon: <img src="images/total_revenue.png" alt="" />,
      bgColor: "bg-green-500",
    },
    {
      title: "Total Customers",
      value: "1349",
      icon: <img src="images/total_customer.png" alt="" />,
      bgColor: "bg-blue-500",
    },
    {
      title: "Total Orders",
      value: "3,500",
      icon: <img src="images/total_orders.png" alt="" />,
      bgColor: "bg-red-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          value={card.value}
          icon={card.icon}
          bgColor={card.bgColor}
        />
      ))}
    </div>
  );
};

export default DashboardCards;
