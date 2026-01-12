// app/not-found.tsx
'use client';

import Link from 'next/link';
import { BiError, BiHome } from 'react-icons/bi';
import { usePathname } from 'next/navigation';
import {  useState } from 'react';

export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
        {/* Hero Section */}
        <div className="p-12 text-center">
          <div className="w-28 h-28 bg-linear-to-r from-red-400 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
            <BiError className="text-5xl text-white drop-shadow-lg" />
          </div>
          
          <h1 className="text-6xl font-black bg-linear-to-r from-gray-900 via-gray-700 to-slate-900 bg-clip-text text-transparent mb-4">
            404
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-md mx-auto">
            Sorry, the page <code className="bg-gray-100 px-2 py-1 rounded font-mono text-sm">{pathname}</code> 
            doesn&apos;t exist or has been moved.
          </p>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
            <Link
              href="/"
              className="group flex flex-col items-center p-6 bg-linear-to-b from-blue-500 to-blue-600 text-white rounded-2xl hover:from-blue-600 hover:to-blue-700 transform hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <BiHome className="text-3xl mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-lg">Go Home</span>
            </Link>
            
            <Link
              href="/dashboard"
              className="group flex flex-col items-center p-6 border-2 border-gray-200 rounded-2xl hover:border-gray-300 hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
            >
              <span className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-3 group-hover:bg-blue-200">
                <BiHome className="text-xl text-blue-600" />
              </span>
              <span className="font-semibold text-lg text-gray-900">Dashboard</span>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="group flex flex-col items-center p-6 border-2 border-orange-200 rounded-2xl hover:border-orange-300 hover:shadow-xl hover:bg-orange-50 transition-all duration-300"
            >
              <span className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-3 group-hover:bg-orange-200">
                <BiError className="text-xl text-orange-600" />
              </span>
              <span className="font-semibold text-lg text-gray-900">Go Back</span>
            </button>
          </div>

          {/* Search + Recent Pages */}
          <div className="grid md:grid-cols-2 gap-6">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for pages or documents..."
                className="w-full pl-12 pr-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-400 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-300 text-lg shadow-sm"
              />
              <BiError className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            </form>

            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900 text-lg">Recent Pages</h3>
              <div className="space-y-2">
                <Link href="/dashboard" className="block p-3 rounded-xl hover:bg-gray-50 transition-colors text-gray-700 hover:text-gray-900 font-medium">
                  → Dashboard
                </Link>
                <Link href="/notices" className="block p-3 rounded-xl hover:bg-gray-50 transition-colors text-gray-700 hover:text-gray-900 font-medium">
                  → Notice Board
                </Link>
                <Link href="/profile" className="block p-3 rounded-xl hover:bg-gray-50 transition-colors text-gray-700 hover:text-gray-900 font-medium">
                  → Profile
                </Link>
              </div>
            </div>
          </div>

          {/* Subtle Footer */}
          <p className="mt-12 text-xs text-gray-500 text-center">
            Don&apos;t worry! Our team has been notified about this missing page. 🚀
          </p>
        </div>
      </div>
    </div>
  );
}
