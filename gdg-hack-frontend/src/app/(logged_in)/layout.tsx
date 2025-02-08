"use client"

import React, { useState } from 'react'
import { Sidebar } from '../../components/sideBar/sidebar'
import { Bell } from 'lucide-react'
// import Image from 'next/image'
import { useDelayedTitle } from '../../hooks/useDelayedTitle'
import  SearchBar  from '../../components/SearchBar'
interface LayoutProps {
    children: React.ReactNode
    user?: {
        name: string
        role: 'manager' 
    }
}

export default function Layout({ children }: LayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const activeTab = useDelayedTitle()

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
                            <SearchBar placeholder='Search member'/>
                        </div>
                        <button type="button" title="Profile" className="ml-4 bg-white p-2 rounded-full shadow">
                            <Bell className="h-6 w-6 text-gray-500" />
                        </button>
                    </div>
                </div>
                <div className="container mx-auto px-6 py-4 ">
                    {children}
                </div>
            </main>
        </div>
    )
}