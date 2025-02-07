import React from 'react';
import { SidebarProps } from '../../types/index';
import { SIDEBAR_ITEMS } from '../../constants/index';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const pathname = usePathname();

  return (
    <aside
      className={`bg-white transition-all duration-500 ease-in-out transform ${isOpen ? 'w-64' : ''} flex flex-col overflow-y-auto custom-scrollbar`}
    >
      <div className="p-8 flex justify-between items-center relative">
        {/* Logo Section */}
        <div className={`flex  justify-between transform transition-all duration-500 px-4 ${isOpen ? 'w-full border-b' : ''}`}>

        <h3 className={` ${isOpen ?'h-16' :'hidden' }`}>
            <span className='text-gdg_blue text-3xl font-bold'>
                G
            </span>
            <span className='text-gdg_green text-3xl font-bold'>
                Ski
            </span>
            <span className='text-gdg_red text-3xl font-bold'>
                ll
            </span>
            <span className='text-gdg_yellow text-3xl font-bold'>
                .
            </span>
        </h3>
          <div className='flex justify-start items-start'>
          <button
            type="button"
            onClick={toggleSidebar}
            className={`absolute transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-all duration-300 ${isOpen ? 'rotate-0  right-2' : 'rotate-180 top-1/2 left-2'}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="flex-1 p-4 space-y-1">
        <ul className="space-y-4">
          {SIDEBAR_ITEMS.map((item, index) => {
            const href = `/${item.name.toLowerCase().replace(/\s+/g, '-')}`;
            const isActive = pathname === href;
            return (
              <li key={index}>
                <Link
                  href={href}
                  className={`relative flex items-center px-3 py-2 rounded-lg transition-colors duration-300 ease-in-out hover:bg-purple_button hover:text-white ${isOpen ? 'justify-start' : 'justify-center'} text-gray-700 ${isActive ? 'bg-purple_button text-white' : ''}`}
                  onMouseEnter={(e) => {
                    const icon = e.currentTarget.querySelector('svg');
                    const text = e.currentTarget.querySelector('span');
                    if (icon) icon.style.color = 'white';
                    if (text) text.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    const icon = e.currentTarget.querySelector('svg');
                    const text = e.currentTarget.querySelector('span');
                    if (icon) icon.style.color = '';
                    if (text) text.style.color = '';
                  }}
                >
                  <item.icon size={24} className="text-purple_logo transition-colors duration-300" />
                  {/* Tooltip when sidebar is collapsed */}
                  {!isOpen && (
                    <span className="absolute left-full ml-4 whitespace-nowrap bg-black text-white text-xs rounded px-2 py-1 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      {item.name}
                    </span>
                  )}

                  {/* Display item name when sidebar is open */}
                  {isOpen && (
                    <span className="ml-4 font-semibold text-black ">
                      {item.name}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <footer className="p-4 text-center">
        {isOpen && (
          <p className="text-sm text-gray-500">
            ©2025 GDG Algiers
          </p>
        )}
      </footer>
    </aside>
  );
};