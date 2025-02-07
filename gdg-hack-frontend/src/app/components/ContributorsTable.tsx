import React from 'react';
import { FaHashtag, FaUser, FaDiscord, FaBuilding, FaStar, FaInfoCircle, FaArrowRight } from 'react-icons/fa';

interface Contributor {
  name: string;
  discordId: string;
  department: string[];
  score: number;
}

interface ContributorsTableProps {
  contributors: Contributor[];
}

const departmentColors: { [key: string]: string } = {
  dev: 'bg-red-200 text-red-800',
  design: 'bg-purple-200 text-purple-800',
  logistics: 'bg-green-200 text-green-800',
  communication: 'bg-yellow-200 text-yellow-800'
};

const ContributorsTable: React.FC<ContributorsTableProps> = ({ contributors }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">Top 5 Contributors</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b bg-gray-100 text-gray-700">
            <th className="p-3"><div className="flex items-center space-x-1"><FaHashtag /></div></th>
            <th className="p-3"><div className="flex items-center space-x-1"><FaUser /><span>Full Name</span></div></th>
            <th className="p-3"><div className="flex items-center space-x-1"><FaDiscord /><span>Discord ID</span></div></th>
            <th className="p-3"><div className="flex items-center space-x-1"><FaBuilding /><span>Department</span></div></th>
            <th className="p-3"><div className="flex items-center space-x-1"><FaStar /><span>Score</span></div></th>
            <th className="p-3"><div className="flex items-center space-x-1"><FaInfoCircle /><span>Details</span></div></th>
          </tr>
        </thead>
        <tbody>
          {contributors.map((contributor, index) => (
            <tr key={index} className="border-b hover:bg-gray-50 transition duration-200">
              <td className="p-3 text-gray-700">{index + 1}</td>
              <td className="p-3 text-gray-700 font-medium">{contributor.name}</td>
              <td className="p-3 text-gray-600">{contributor.discordId}</td>
              <td className="p-3">
                {contributor.department.map((dept, i) => (
                  <span key={i} className={`px-3 py-1 rounded-lg text-xs font-semibold mr-1 ${departmentColors[dept] || 'bg-gray-200'}`}>
                    {dept}
                  </span>
                ))}
              </td>
              <td className="p-3 text-gray-700 font-semibold">{contributor.score}</td>
              <td className="p-3">
                <button className="bg-yellow-300 text-white p-2 rounded-lg hover:bg-yellow-400 hover:scale-105 transition-transform duration-200">
                  <FaArrowRight />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContributorsTable;
