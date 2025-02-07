import React from 'react';
import { FaHashtag, FaUser, FaDiscord, FaBuilding, FaStar, FaInfoCircle } from 'react-icons/fa';

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
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Top 5 Contributors</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-2"><div className="flex items-center space-x-1"><FaHashtag /><span>#</span></div></th>
            <th className="p-2"><div className="flex items-center space-x-1"><FaUser /><span>Full Name</span></div></th>
            <th className="p-2"><div className="flex items-center space-x-1"><FaDiscord /><span>Discord ID</span></div></th>
            <th className="p-2"><div className="flex items-center space-x-1"><FaBuilding /><span>Department</span></div></th>
            <th className="p-2"><div className="flex items-center space-x-1"><FaStar /><span>Score</span></div></th>
            <th className="p-2"><div className="flex items-center space-x-1"><FaInfoCircle /><span>Details</span></div></th>
          </tr>
        </thead>
        <tbody>
          {contributors.map((contributor, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{contributor.name}</td>
              <td className="p-2">{contributor.discordId}</td>
              <td className="p-2">
                {contributor.department.map((dept, i) => (
                  <span key={i} className={`px-2 py-1 rounded text-xs mr-1 ${departmentColors[dept] || 'bg-gray-200'}`}>
                    {dept}
                  </span>
                ))}
              </td>
              <td className="p-2">{contributor.score}</td>
              <td className="p-2">
                <span className="w-4 h-4 bg-yellow-300 rounded inline-block"></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContributorsTable;
