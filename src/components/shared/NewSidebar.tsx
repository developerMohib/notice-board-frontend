
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars} from 'react-icons/fa';
import { RxDashboard } from "react-icons/rx";
import { FaHubspot } from "react-icons/fa";
import { SiHackthebox } from "react-icons/si";
import { TbUsers } from "react-icons/tb";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";
import { CiBellOn } from 'react-icons/ci';

const NewSidebar = ({ children }: { children: React.ReactNode }) => {
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSubmenu = (label: string) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const currentHour = new Date().getHours();
  const getGreeting = () => {
    if (currentHour >= 5 && currentHour < 12) return 'Good Morning';
    if (currentHour >= 12 && currentHour < 17) return 'Good Afternoon';
    if (currentHour >= 17 && currentHour < 21) return 'Good Evening';
    return 'Good Night';
  };

  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

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
        { label: 'Training Programs', href: '/career/training' },
        { label: 'Promotion Tracker', href: '/career/promotions' },
        { label: 'Skill Assessments', href: '/career/assessments' },
      ],
    },
    { icon: <IoDocumentTextOutline />, label: 'Document Manager', href: '/document-manager' },
    { icon: <TiDocumentText />, label: 'Notice Board', href: '/notice-board' },
    { icon: <IoDocumentTextOutline />, label: 'Activity Log', href: '/activity-log' },
    { icon: <IoDocumentTextOutline />, label: 'Exit Interview', href: '/exit-interview' },
    { icon: <TiDocumentText />, label: 'Profile', href: '/profile' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static inset-y-0 left-0 z-50 w-64
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 bg-blue-50 shadow-md
        `}
      >
        <div className="p-4 flex items-center justify-start border-b">
          <Link href="/" onClick={() => setSidebarOpen(false)}>
            <Image
              src="/images/nebsLogo.png"
              alt="Logo"
              width={120}
              height={50}
              priority
            />
          </Link>
        </div>

        <nav className="px-2 py-4 space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            const hasChildren = item.children && item.children.length > 0;

            if (hasChildren) {
              const isChildActive = item.children.some(child => pathname === child.href);
              return (
                <div key={item.label}>
                  <button
                    onClick={() => toggleSubmenu(item.label)}
                    className={`
                      flex items-center justify-between w-full px-4 py-2.5 rounded-md text-base font-medium
                      transition-colors duration-200
                      ${isChildActive || openSubmenus[item.label]
                        ? 'bg-gray-100 border-r-4 border-[#FF3E01] text-gray-900'
                        : 'text-gray-700 hover:bg-gray-100'
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      {item.label}
                    </div>
                    <svg
                      className={`w-4 h-4 transition-transform ${openSubmenus[item.label] ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {openSubmenus[item.label] && (
                    <div className="pl-6 pt-1 pb-2 space-y-1">
                      {item.children.map((child) => {
                        const childIsActive = pathname === child.href;
                        return (
                          <Link
                            key={child.href}
                            href={child.href!}
                            onClick={() => setSidebarOpen(false)}
                            className={`
                              block px-4 py-2 rounded-md text-sm font-medium
                              transition-colors duration-200
                              ${childIsActive
                                ? 'bg-gray-100 border-r-4 border-[#FF3E01] text-gray-900'
                                : 'text-gray-600 hover:bg-gray-100'
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

            return (
              <Link
                key={item.href}
                href={item.href!}
                onClick={() => setSidebarOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-2.5 rounded-md text-base font-medium
                  transition-colors duration-200
                  ${isActive
                    ? 'bg-gray-100 border-r-4 border-[#FF3E01] text-gray-900'
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

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Top Navbar */}
        <nav className="px-4 py-3 bg-white shadow-sm">
          <div className="flex items-center justify-between">
            {/* Hamburger for mobile */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              <FaBars size={20} />
            </button>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {getGreeting()}, Asif
              </h2>
              <p className="mt-0.5 text-sm text-gray-500">{currentDate}</p>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                className="relative p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Notifications"
              >
                <CiBellOn size={24} className="text-gray-600" />
              </button>

              <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                  <p className="font-medium text-gray-900">Asif Khan</p>
                  <p className="text-xs text-gray-500">HR</p>
                </div>
                <div className="relative">
                  <Image
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    alt="Asif Khan"
                    width={40}
                    height={40}
                    className="rounded-full object-cover border border-gray-200"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="p-4 md:p-6 flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default NewSidebar;