import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  bgColor: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, bgColor }) => {
  return (
    <div
      className={`p-4 ${bgColor} text-white rounded-lg shadow-md flex items-center transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg`}
    >
      <div className="text-2xl mr-3">{icon}</div>
      <div>
        <p className="text-sm">{title}</p>
        <h3 className="text-xl font-bold">{value}</h3>
      </div>
    </div>
  );
};

export default StatCard;
