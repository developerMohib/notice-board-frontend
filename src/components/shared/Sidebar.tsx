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
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { icon: <RxDashboard />, label: 'Dashboard', href: '/' },
    {
      icon: <TbUsers />,
      label: 'Employee',
      href: null,
      children: [
        { label: 'Employee Database', href: '/employee/database' },
        { label: 'Add New Employee', href: '/employee/create' },
        { label: 'Performance Report', href: '/employee/performance-report' },
        { label: 'Performance History', href: '/employee/performance-history' },
      ],
    },
    { icon: <SiHackthebox />, label: 'Payroll', href: '/payroll' },
    { icon: <FaHubspot />, label: 'Pay Slip', href: '/pay-slip' },
    { icon: <IoDocumentTextOutline />, label: 'Requests Center', href: '/requests-center' },
    {
      icon: <TbUsers />,
      label: 'Career Development',
      href: null,
      children: [
        { label: 'Employee Database', href: '/employee/database' },
        { label: 'Add New Employee', href: '/employee/create' },
        { label: 'Performance Report', href: '/employee/performance-report' },
        { label: 'Performance History', href: '/employee/performance-history' },
      ],
    },
    { icon: <IoDocumentTextOutline />, label: 'Document Manager', href: '/document-manager' },
    { icon: <TiDocumentText />, label: 'Notice Board', href: '/notice-board' },
    { icon: <IoDocumentTextOutline />, label: 'Activity Log', href: '/activity-log' },
    { icon: <IoDocumentTextOutline />, label: 'Exit Interview', href: '/exit-interview' },
    { icon: <TiDocumentText />, label: 'Profile', href: '/profile' },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleSubmenu = (label: string) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [label]: !prev[label],
    }));
  };
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
          {isOpen ? <FaTimes size={20} /> : null}
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

        <nav className="px-2 space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            const hasChildren = item.children && item.children.length > 0;

            if (hasChildren) {
              return (
                <div key={item.label}>
                  {/* Parent Item */}
                  <button
                    onClick={() => toggleSubmenu(item.label)}
                    className={`
              flex items-center justify-between w-full px-4 py-2.5 rounded-md text-base font-medium
              transition-colors duration-200
              ${isActive || (item.children?.some(child => pathname.startsWith(child.href || ''))
                        ? 'bg-gray-100 border-r-2 rounded-md border-[#FF3E01]'
                        : 'text-gray-700 hover:bg-gray-100'
                      )}
            `}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      {item.label}
                    </div>
                    <svg
                      className={`w-4 h-4 transition-transform ${openSubmenus[item.label] ? 'rotate-180' : ''
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Submenu */}
                  {openSubmenus[item.label] && (
                    <div className="pl-6 pt-1 pb-2 space-y-1">
                      {item.children.map((child) => {
                        const childIsActive = pathname === child.href;
                        return (
                          <Link
                            key={child.href}
                            href={child.href!}
                            onClick={() => setIsOpen(false)} // Close mobile sidebar
                            className={`
                      block px-4 py-2 rounded-md text-sm font-medium
                      transition-colors duration-200
                      ${childIsActive
                                ? 'bg-gray-100 border-r-2 rounded-md border-[#FF3E01]'
                                : 'text-gray-700 hover:bg-gray-100'
                              }
                    `}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            // Regular item (no children)
            return (
              <Link
                key={item.href}
                href={item.href!}
                onClick={() => setIsOpen(false)}
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