import React from 'react';

interface Contributor {
  name: string;
  department: string[];
  score: number;
}

interface ContributorsTableProps {
  contributors: Contributor[];
}

const ContributorsTable: React.FC<ContributorsTableProps> = ({ contributors }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Top 5 Contributors</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-2">#</th>
            <th className="p-2">Full Name</th>
            <th className="p-2">Department</th>
            <th className="p-2">Score</th>
          </tr>
        </thead>
        <tbody>
          {contributors.map((contributor, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{contributor.name}</td>
              <td className="p-2">
                {contributor.department.map((dept, i) => (
                  <span key={i} className="px-2 py-1 bg-gray-200 rounded text-xs mr-1">
                    {dept}
                  </span>
                ))}
              </td>
              <td className="p-2">{contributor.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContributorsTable;
