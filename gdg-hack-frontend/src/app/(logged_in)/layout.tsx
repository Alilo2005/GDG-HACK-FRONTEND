// "use client"

// import React, { useState } from 'react'
// import { Sidebar } from '../../components/sideBar/sidebar'
// import { Bell,  } from 'lucide-react'
// // import Image from 'next/image'
// import { useDelayedTitle } from '../../hooks/useDelayedTitle'
// import  SearchBar  from '../../components/SearchBar'
// import SettingsContent from '../../components/managers/settingsContent'
// interface LayoutProps {
//     children: React.ReactNode
//     user?: {
//         name: string
//         role: 'manager' | 'admin'
//     }
// }

// export default function Layout({ children }: LayoutProps) {
//     const [sidebarOpen, setSidebarOpen] = useState(true)
//     const activeTab = useDelayedTitle()

//     return (
//         <div className="flex h-screen bg-gray-100 w-full">
//             <Sidebar
//                 isOpen={sidebarOpen}
//                 toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
//             />
//             <main className="flex-1 overflow-y-auto">
//                 <div className="flex justify-between items-center w-full bg-white p-7">
//                     <h2 className="text-3xl font-semibold text-gdg_blue">{activeTab}</h2>
//                     <div className="flex items-center">
//                         <div className="relative w-48">
//                             <SearchBar placeholder='Search member'/>
//                         </div>
//                         <button type="button" title="Profile" className="ml-4 bg-white p-2 rounded-full shadow">
//                             <Bell className="h-6 w-6 text-gray-500" />
//                         </button>
//                     </div>
//                 </div>
//                 <div className="container mx-auto px-6 py-4 ">
//                     {children}
//                 </div>
//             </main>
//         </div>
//     )
// }


"use client";

import React, { useState } from "react";
import { Sidebar } from "../../components/sideBar/sidebar";
import { User } from "lucide-react";
import { useDelayedTitle } from "../../hooks/useDelayedTitle";
import SearchBar from "../../components/SearchBar";
import SettingsContent from "../../components/managers/settingsContent";

interface LayoutProps {
  children: React.ReactNode;
  user?: {
    name: string;
    role: "manager" | "admin";
  };
}

export default function Layout({ children }: LayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
    const activeTab = useDelayedTitle();
  
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
  
    return (
      <div className="flex h-screen bg-gray-100 w-full">
        <Sidebar
          isOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
        <main className="flex-1 overflow-y-auto">
          <div className="flex justify-between items-center w-full bg-white p-7">
            <h2 className="text-3xl font-semibold text-gdg_blue">{activeTab}</h2>
            <div className="flex items-center">
              <div className="relative w-48">
                <SearchBar placeholder="Search member" />
              </div>
              {/* Profile Button */}
              <button
                type="button"
                title="Profile"
                className="ml-4 bg-white p-2 rounded-full shadow"
                onClick={handleOpenModal}
              >
                <User className="h-6 w-6 text-gray-500" />
              </button>
            </div>
          </div>
          <div className="container mx-auto px-6 py-4">{children}</div>
        </main>
  
        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={handleCloseModal} // Close modal on overlay click
          >
            <div
              className="bg-white p-4 rounded-lg shadow-lg w-1/2 max-w-lg"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              >
                ✕
              </button>
  
              {/* SettingsContent Component */}
              <SettingsContent />
            </div>
          </div>
        )}
      </div>
    );
  }