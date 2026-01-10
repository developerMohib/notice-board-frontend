"use client";
import Link from 'next/link';
import  { useState } from 'react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);

    const menuItems = [
    { icon: 'fa-home', label: 'Dashboard', href: '/' },
    { icon: 'fa-file-alt', label: 'Payroll', href: '/payroll' },
    { icon: 'fa-users', label: 'Pay Slip', href: '/pay-slip' },
    { icon: 'fa-store', label: 'Audience', href: '/audience' },
    { icon: 'fa-exchange-alt', label: 'Requests Center', href: '/requests-center' },
    { icon: 'fa-exchange-alt', label: 'Document Manager', href: '/document-manager' },
    { icon: 'fa-exchange-alt', label: 'Notice Board', href: '/notice-board' },
    { icon: 'fa-exchange-alt', label: 'Activity Log', href: '/activity-log' },
    { icon: 'fa-exchange-alt', label: 'Exit Interview', href: '/exit-interview' },
    { icon: 'fa-exchange-alt', label: 'Profile', href: '/profile' },
  ];
    return (
        <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={onClose}
        />
      )}
      
      <aside className={`
        fixed md:static inset-y-0 left-0 transform 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 transition-transform duration-300 ease-in-out
        z-30e
        flex flex-col h-full
      `}>
        <div className="p-4">
          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center py-2.5 px-4 rounded 
                         transition duration-200 hover:bg-linear-to-r 
                         hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
              >
                <i className={`fas ${item.icon} mr-3`}></i>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
    );
};

export default Sidebar;