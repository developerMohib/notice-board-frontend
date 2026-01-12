"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { RxDashboard } from "react-icons/rx";
import { FaHubspot } from "react-icons/fa";
import { SiHackthebox } from "react-icons/si";
import { TbUsers } from "react-icons/tb";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { icon: <RxDashboard />, label: 'Dashboard', href: '/' },
    { icon: <SiHackthebox />, label: 'Payroll', href: '/payroll' },
    { icon: <FaHubspot />, label: 'Pay Slip', href: '/pay-slip' },
    { icon: <TbUsers />, label: 'Audience', href: '/audience' },
    { icon: <IoDocumentTextOutline />, label: 'Requests Center', href: '/requests-center' },
    { icon: <IoDocumentTextOutline />, label: 'Document Manager', href: '/document-manager' },
    { icon: <TiDocumentText />, label: 'Notice Board', href: '/notice-board' },
    { icon: <IoDocumentTextOutline />, label: 'Activity Log', href: '/activity-log' },
    { icon: <IoDocumentTextOutline />, label: 'Exit Interview', href: '/exit-interview' },
    { icon: <TiDocumentText />, label: 'Profile', href: '/profile' },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Toggle button (visible only on mobile) */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md bg-white shadow-md text-gray-700"
        >
                    {isOpen ? <FaTimes size={20} /> : null  }
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`
    fixed md:static inset-y-0 left-0
    transform transition-transform duration-300 ease-in-out
    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    md:translate-x-0
  `}
      >
        <div className="p-4 flex items-center justify-start">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image 
              src="/images/nebsLogo.png" 
              alt="Logo" 
              width={120} 
              height={50}
              priority
            />
          </Link>
        </div>

        <nav className="py-4 px-2 space-y-1">
          {menuItems?.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)} // Close on mobile after click
                className={`
                  flex items-center gap-3 px-4 py-2.5 rounded-md text-base font-medium
                  transition-colors duration-200
                  ${isActive
                    ? 'bg-gray-100 border-r-2 rounded-md border-[#FF3E01]'
                    : 'text-gray-700 hover:bg-gray-100'
                  }
                `}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;