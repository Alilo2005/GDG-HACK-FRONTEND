"use client";

import React from "react";

interface DataTableProps {
  rows: { question: string; mentee: string; department: string; createdAt: string; closedAt: string }[];
}

export const DataTable: React.FC<DataTableProps> = ({ rows }) => {
  return (
    <table className="w-full bg-white rounded-2xl shadow-md">
      <thead className="bg-gray-200 text-left">
        <tr>
          <th className="px-4 py-2">#</th>
          <th className="px-4 py-2">Question</th>
          <th className="px-4 py-2">Mentee</th>
          <th className="px-4 py-2">Department</th>
          <th className="px-4 py-2">CreateAt DATE Time</th>
          <th className="px-4 py-2">ClosedAt DATE Time</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index} className="hover:bg-gray-100">
            <td className="px-4 py-2">{index + 1}</td>
            <td className="px-4 py-2">{row.question}</td>
            <td className="px-4 py-2">{row.mentee}</td>
            <td className="px-4 py-2">
              <span
                className={`px-2 py-1 text-sm rounded ${
                  row.department === "design"
                    ? "bg-blue-200 text-blue-800"
                    : "bg-green-200 text-green-800"
                }`}
              >
                {row.department}
              </span>
            </td>
            <td className="px-4 py-2">{row.createdAt}</td>
            <td className="px-4 py-2">{row.closedAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
