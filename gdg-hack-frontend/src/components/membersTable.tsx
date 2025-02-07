import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MembersData, MemberTableProps } from '../types/index';
import { FaEdit, FaTrash } from 'react-icons/fa';
import manager from '../app/(logged_in)/managers/page';
// import api from "@/lib/axios";

const MemberTable: React.FC<MemberTableProps> = ({ data: initialData }) => {
  const [data, setData] = useState(initialData);

  const [selectedDepartement, setSelectedDepartement] = useState<string>("");

//   const [isEditModalOpen, setEditModalOpen] = useState(false);
//   const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
//   const [selectedmember, setSelectedmember] = useState<MembersData | null>(null);

//   const handleEdit = (member: MembersData) => {
//     setSelectedmember(member);
//     setEditModalOpen(true);
//   };

//   const handleDelete = (member: MembersData) => {
//     setSelectedmember(member);
//     setDeleteModalOpen(true);
//   };

//   const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!selectedmember) return;

//     const formData = new FormData(e.currentTarget);
//     const formatDate = (date: string) => {
//       const d = new Date(date);
//       const pad = (n: number) => (n < 10 ? '0' + n : n);
//       const hours = d.getHours();
//       const minutes = d.getMinutes();
//       const seconds = d.getSeconds();
//       const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
//       return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${formattedTime}`;
//     };
//     const updatedmember = {
//       energy_consumed: parseFloat(formData.get('energy_consumed') as string),
//       start_shift_time: formatDate(formData.get('start_shift_time') as string),
//       end_shift_time: formatDate(formData.get('end_shift_time') as string),
//     };

//     try {
//       const response = await api.put(`/api/energy-usage/${selectedmember.id}`, updatedmember);
//       if (response.status === 200) {
//         const updatedData = data.map(member =>
//           member.id === selectedmember.id ? { ...member, ...updatedmember } : member
//         );
//         setData(updatedData);
//         setEditModalOpen(false);
//         setSelectedmember(null);
//       }
//     } catch (error) {
//       console.error('Error updating energy usage:', error);
//     }
//   };


const DetailsIcon = () => (
    <img
      alt='details-icon'
      src="/gdg.svg"
      height={20}
      width={20}
    />
  );


const listeDep = [
    "Dev","Design","Marketing","Finance","HR","Management"
];

const filterDepartement = (dep: string) => {
    // if (dep === "") {
    //     setData(initialData);
    // } else {
    //     const filteredData = initialData.filter((member) => member.departement.includes(dep));
    //     setData(filteredData);
    // }

    setSelectedDepartement(dep);
    if (dep === "") {
        setData(initialData);
      } else {
        const filteredData = initialData.filter((member) => member.departement.includes(dep));
        setData(filteredData);
      }
}


// const filterMemberData = data.filter((member) => {
//     if (selectedDepartement === "") {
//         return true;
//     } else {
//         return member.departement.includes(selectedDepartement);
//     }
// });

  return (
    <>
    <div>
        <button className=''>Filter By </button>
        <select className='' onChange={(e) => filterDepartement(e.target.value)}>
          <option value="">All</option>
          {listeDep.map((dep) => (
            <option key={dep} value={dep}>{dep}</option>
          ))}
        </select>
    </div>
      <div className="bg-white rounded-lg shadow-md flex-grow overflow-auto custom-scrollbar">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Discord Id</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dep</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Skills</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((member, index) => (
              <tr key={member.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {member.full_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {member.discord_id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {member.departement.join(", ") || "N/A"} </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {member.skills?.join(", ") || "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {member.score} 
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium items-center  justify-center" >
                  <a
                    type="button"
                    className="text-indigo-600 hover:text-indigo-900 flex items-center transition duration-150 ease-in-out"
                    aria-label="Details"
                    href={`/members/${member.id}`}
                  >
                    <DetailsIcon />
                  </a>
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