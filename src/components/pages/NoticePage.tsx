"use client";
import { useState } from 'react';
import Pagination from '../ui/Pagination';
import Noticetable from '../ui/Noticetable';
import { BsPencil } from 'react-icons/bs';
import { BiPlus } from 'react-icons/bi';
import Link from 'next/link';
import { useNotices } from '@/hooks/useGetNoticeAll';
import { INotice } from '@/types/notice.types';
interface NoticeFilters {
  employeeName?: string;
  department?: string;
  status?: string;
}

const NoticePage = () => {
    const [page, setPage] = useState(1);
    const [filters, setFilters] = useState<NoticeFilters>({});
    const { data } = useNotices(page, 5, filters);
    const notices: INotice[] = data?.notices || [];


    const activeNotices = notices?.filter(notice => notice.status.toLowerCase() === 'published');
    const draftNotices = notices?.filter(notice => notice.status.toLowerCase() === 'draft');

    return (
        <div>
            <div className="flex justify-between items-center my-3">
                <div>
                    <h1 className="text-lg font-semibold">Notice Management</h1>

                    <div className="flex items-center gap-3 mt-1 text-xs">
                        <span className="text-[#00A46E]">Active Notice {activeNotices?.length || 0}</span>

                        {/* Divider */}
                        <span className="h-3 w-px bg-gray-400"></span>

                        <span className="text-[#F95524]">Draft Notice {draftNotices?.length || 0}</span>
                    </div>
                </div>

                <div className="flex items-center">
                    <Link href="/create-notice" className="flex items-center gap-2 bg-[#F95524] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                        <BiPlus className="text-lg" />
                        <span>Create Notice</span>
                    </Link>

                    <button className="ml-2 flex items-center gap-2 border border-[#F95524] px-4 py-2 rounded hover:bg-gray-600 transition-colors text-[#F95524]">
                        <BsPencil className="text-base" />
                        <span>All Draft Notice</span>
                    </button>
                </div>
            </div>

            <div className="mb-4">
                <div className="flex flex-row justify-end items-center gap-2 mb-6">
                    <h1>Filter by:</h1>
                    <div>
                        <select className="px-2 py-2 border border-gray-300 rounded-lg outline-none transition text-sm">
                            <option value="">Department or Individual </option>
                            <option value="all">All Department</option>
                            <option value="finance">Finance</option>
                            <option value="hr">HR</option>
                            <option value="sales">Sales Team</option>
                            <option value="web">Web Team</option>
                            <option value="database">Database Team</option>
                            <option value="admin">Admin</option>
                            <option value="individual">Individual</option>
                        </select>
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="Employee id or Name"
                            className="px-2 py-2 border border-gray-300 rounded-lg outline-none transition text-sm"
                        />
                    </div>

                    {/* Status Filter */}
                    <div>
                        <select className="px-2 py-2 border border-gray-300 rounded-lg outline-none transition text-sm">
                            <option value="">All Status</option>
                            <option value="published">Published</option>
                            <option value="unpublished">Unpublished</option>
                            <option value="draft">Draft</option>
                        </select>
                    </div>

                    {/* Published On Filter */}
                    <div className="flex flex-col gap-1">
                        <input
                            type="date"
                            className="px-2 py-2 border border-gray-300 rounded-lg outline-none transition text-sm"
                        />
                    </div>

                    <div>
                        <button onClick={() => setFilters({})} className="px-2 py-2 border border-gray-300 rounded-lg outline-none transition text-sm">
                            Reset Filters
                        </button>
                    </div>
                </div>
            </div>


            <Noticetable page={page} filters={filters} />
            <Pagination page={page} onPageChange={setPage} filters={filters}   />
        </div>
    );
};

export default NoticePage;