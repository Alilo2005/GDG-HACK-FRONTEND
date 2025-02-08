"use client"
import React, { useState } from 'react';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { MembersData, MemberTableProps } from '../types/index';
// import Image from 'next/image';
import { FaHashtag, FaUser, FaDiscord, FaBuilding, FaStar, FaInfoCircle, FaArrowRight } from 'react-icons/fa';
// import api from "@/lib/axios";

const MemberTable: React.FC<MemberTableProps> = ({ data: initialData }) => {
  const [data, setData] = useState(initialData);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedDepartement, setSelectedDepartement] = useState<string>("");



const listeDep = [
    "Developement","Visual","Marketing","Finance","HR","Management"
];

const filterDepartement = (dep: string) => {
    setSelectedDepartement(dep);
    if (dep === "") {
        setData(initialData);
      } else {
        const filteredData = initialData.filter((member) => member.departement.includes(dep));
        setData(filteredData);
      }
}


  return (
    <>
    <div className='flex items-center justify-between p-4 '>

<div className="flex items-center gap-4">
  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
    Filter By
  </button>
  <select
    className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
    onChange={(e) => filterDepartement(e.target.value)}
  >
    <option value="">All</option>
    {listeDep.map((dep) => (
      <option key={dep} value={dep}>
        {dep}
      </option>
    ))}
  </select>
</div>

    </div>
    <div className="overflow-x-auto">
  <table className="w-full bg-white rounded-2xl shadow-md border-collapse">
    <thead className="bg-gray-200 text-left">
      <tr>
        <th className="px-4 py-2 text-sm font-medium text-gray-600 uppercase tracking-wider">
          <div className="flex items-center space-x-1">
            <FaHashtag />
          </div>
        </th>
        <th className="px-4 py-2 text-sm font-medium text-gray-600 uppercase tracking-wider">
          <div className="flex items-center space-x-1">
            <FaUser />
            <span>Full Name</span>
          </div>
        </th>
        <th className="px-4 py-2 text-sm font-medium text-gray-600 uppercase tracking-wider">
          <div className="flex items-center space-x-1">
            <FaDiscord />
            <span>Discord ID</span>
          </div>
        </th>
        <th className="px-4 py-2 text-sm font-medium text-gray-600 uppercase tracking-wider">
          <div className="flex items-center space-x-1">
            <FaBuilding />
            <span>Department</span>
          </div>
        </th>
        <th className="px-4 py-2 text-sm font-medium text-gray-600 uppercase tracking-wider">
          <div className="flex items-center space-x-1">
            <FaStar />
            <span>Skills</span>
          </div>
        </th>
        <th className="px-4 py-2 text-sm font-medium text-gray-600 uppercase tracking-wider">
          <div className="flex items-center space-x-1">
            <FaInfoCircle />
            <span>Score</span>
          </div>
        </th>
        <th className="px-4 py-2 text-sm font-medium text-gray-600 uppercase tracking-wider">
          Details
        </th>
      </tr>
    </thead>
    <tbody>
      {data.map((member, index) => (
        <tr
          key={member.id}
          className={`hover:bg-gray-100 transition duration-200 ${
            index % 2 === 0 ? "bg-white" : "bg-gray-50"
          }`}
        >
          <td className="px-4 py-2 text-sm text-gray-900 font-medium">
            {index + 1}
          </td>
          <td className="px-4 py-2 text-sm text-gray-900 font-medium">
            {member.full_name}
          </td>
          <td className="px-4 py-2 text-sm text-gray-500">
            {member.discord_id}
          </td>
          <td className="px-4 py-2">
            {member.departement.map((dept, i) => (
              <span
                key={i}
                className={`px-2 py-1 text-sm rounded-lg font-semibold mr-1 ${
                  dept === "Development"
                    ? "bg-green-100 text-green-800"
                    : dept === "Visual"
                    ? "bg-purple-100 text-purple-800"
                    : dept === "Communication"
                    ? "bg-yellow-100 text-yellow-800"
                    : dept === "Logistics"
                    ? "bg-orange-100 text-orange-800"
                    : dept === "ER"
                    ? "bg-emerald-100 text-emerald-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {dept}
              </span>
            ))}
          </td>
          <td className="px-4 py-2 text-sm text-gray-500">
            {member.skills?.join(", ") || "N/A"}
          </td>
          <td className="px-4 py-2 text-sm text-gray-700 font-semibold">
            {member.score}
          </td>
          <td className="px-4 py-2">
            <button className="bg-gdg_blue text-white p-1 rounded-lg hover:scale-105 transition-transform duration-200">
              <FaArrowRight />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </>
  );
};

export default MemberTable;