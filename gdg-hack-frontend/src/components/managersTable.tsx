import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaPlus, FaBuilding, FaDiscord, FaUser,  } from 'react-icons/fa';
import { ManagersData, ManagerTableProps } from '../types/index';

const ManagerTable: React.FC<ManagerTableProps> = ({ data: initialData }) => {
  // const [data, setData] = useState(initialData);
  const [filteredData, setFilteredData] = useState<ManagersData[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedManager, setSelectedManager] = useState<ManagersData | null>(null);
  const [newManager, setNewManager] = useState<ManagersData>({
    id: "0023",
    full_name: '',
    discord_id: '',
    email: '',
    password: '',
    departement: [],
  });


 

// function setSelectedManagers(manager: ManagersData) {
//   setSelectedManager(manager);
// }


  useEffect(() => {
    setFilteredData(initialData);
  }, [initialData]);

  const handleAddManager = () => {
    // Generate a unique ID for the new manager
    const newManagerWithId = { ...newManager, id: Date.now().toString() }; // Convert to string
    setFilteredData([...filteredData, newManagerWithId]);
    setIsAddModalOpen(false);
    setNewManager({ id: '0', full_name: '', discord_id: '', email: '', departement: [] , password :'' }); // Reset form
  };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewManager({ ...newManager, [name]: value });
  };

  const handleDepartmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewManager({ ...newManager, departement: value.split(',') });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getStatusColor = (dep: ManagersData['departement']) => {
    if (dep.includes('Dev')) {
      return 'text-purple-600 text-sm rounded';
    } else if (dep.includes('Design')) {
      return 'text-green-500 text-sm rounded';
    } else if (dep.includes('Hr')) {
      return 'text-red-500 text-sm rounded';
    } else {
      return 'text-gray-600 text-sm rounded';
    }
  };

  const handleEdit = (manager: ManagersData) => {
    setSelectedManager(manager);
    setIsAddModalOpen(true);
  };


  const handleDelete = (manager: ManagersData) => {
    const updatedData = filteredData.filter(item => item.id !== manager.id);
    setFilteredData(updatedData);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md flex-grow overflow-auto custom-scrollbar">
        {/* Action Toolbar */}
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex space-x-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center"
              onClick={() => setIsAddModalOpen(true)}
            >
              <FaPlus className="mr-2" /> Create Manager
            </button>
          </div>
        </div>

        {/* Table */}
        <table className="w-full bg-white rounded-2xl shadow-md border-collapse">
  <thead className="bg-gray-200 text-left">
    <tr>
      <th className="px-4 py-2 text-sm font-medium text-gray-600 uppercase tracking-wider">
        #
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
          <span>Email</span>
        </div>
      </th>
      <th className="px-4 py-2 text-sm font-medium text-gray-600 uppercase tracking-wider">
        <div className="flex items-center space-x-1">
          <FaBuilding />
          <span>Department</span>
        </div>
      </th>
      <th className="px-4 py-2 text-sm font-medium text-gray-600 uppercase tracking-wider">
        Actions
      </th>
    </tr>
  </thead>
  <tbody>
    {filteredData.map((manager, index) => (
      <tr
        key={manager.id}
        className={`hover:bg-gray-100 transition duration-200 ${
          index % 2 === 0 ? "bg-white" : "bg-gray-50"
        }`}
      >
        <td className="px-4 py-2 text-sm text-gray-900 font-medium">
          {index + 1}
        </td>
        <td className="px-4 py-2 text-sm text-gray-900 font-medium">
          {manager.full_name}
        </td>
        <td className="px-4 py-2 text-sm text-gray-500">
          {manager.discord_id}
        </td>
        <td className="px-4 py-2 text-sm text-gray-500">
          {manager.email}
        </td>
        <td className="px-4 py-2">
          {manager.departement.map((dept, i) => (
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
        <td className="px-4 py-2 text-sm font-medium flex space-x-2">
          <button
            type="button"
            className="text-blue-500 flex items-center transition duration-150 ease-in-out"
            aria-label="Edit"
            onClick={() => handleEdit(manager)}
          >
            <FaEdit className="mr-1" />
          </button>
          <button
            type="button"
            className="text-red-500 hover:text-red-900 flex items-center transition duration-150 ease-in-out"
            aria-label="Delete"
            onClick={() => handleDelete(manager)}
          >
            <FaTrash className="mr-1" />
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

      </div>

      {/* Add Manager Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full sm:max-w-lg">
            <h2 className="text-xl font-semibold mb-4">Create Manager</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddManager();
              }}
            >
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="full_name"
                  value={newManager.full_name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Discord Id</label>
                <input
                  type="text"
                  name="discord_id"
                  value={newManager.discord_id}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={newManager.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={newManager.password}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Departement (comma-separated)</label>
                <input
                  type="text"
                  name="departement"
                  value={newManager.departement.join(',')}
                  onChange={handleDepartmentChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
                  onClick={() => setIsAddModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Add Manager
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ManagerTable;
