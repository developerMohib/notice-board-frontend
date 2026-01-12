"use client";

import { BiPlus } from "react-icons/bi";
import { BsPencil } from "react-icons/bs";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useAllNotices } from "@/hooks/useGetNoticeAll";
import { BiCheck, BiX } from "react-icons/bi";
import { BsEye, BsFiletypeWoff, BsTrash2 } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { INotice } from "@/types/notice.types";

const Noticetable = () => {
    const { data, isLoading } = useAllNotices();
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const notices: INotice[] = data?.data || [];

    const activeNotices = notices?.filter(notice => notice.status.toLowerCase() === 'published');
    const draftNotices = notices?.filter(notice => notice.status.toLowerCase() === 'draft');

    // Handle individual row checkbox change
    const handleRowCheckboxChange = (id: string, checked: boolean) => {
        if (checked) {
            setSelectedIds((prev) => [...prev, id]);
        } else {
            setSelectedIds((prev) => prev.filter((itemId) => itemId !== id));
        }
    };

    // Handle "Select All" checkbox
    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedIds(notices.map((item) => item._id));
        } else {
            setSelectedIds([]);
        }
    };

    // Check if all visible rows are selected
    const isAllSelected = notices.length > 0 && selectedIds.length === notices.length;
    const isIndeterminate = selectedIds.length > 0 && selectedIds.length < notices.length;

    useEffect(() => {
        // Optional: Log selected IDs or trigger side effects
        console.log("Selected notice IDs:", selectedIds);
    }, [selectedIds]);

    if (isLoading) return <p>Loading...</p>;

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case 'published':
                return 'bg-green-100 text-green-800';
            case 'unpublished':
                return 'bg-yellow-100 text-yellow-800';
            case 'draft':
                return 'bg-[#fdecce] text-[#F59E0B]';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="rounded-lg border border-gray-200 overflow-x-auto">

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
                        <button className="px-2 py-2 border border-gray-300 rounded-lg outline-none transition text-sm">
                            Reset Filters
                        </button>
                    </div>
                </div>
            </div>



            <table className="min-w-full divide-y divide-gray-200 text-xs">
                <thead className="bg-gray-50">
                    <tr>
                        {/* Compact header cells */}
                        <th scope="col" className="px-3 py-2 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                            <input
                                type="checkbox"
                                className="h-3.5 w-3.5 text-blue-600 rounded focus:ring-blue-500"
                                checked={isAllSelected}
                                onChange={(e) => handleSelectAll(e.target.checked)}
                                ref={(el) => { if (el) el.indeterminate = isIndeterminate; }}
                            />
                            <span className="ml-1.5">Title1111</span>
                        </th>
                        <th scope="col" className="px-3 py-2 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                            Notice Type
                        </th>
                        <th scope="col" className="px-3 py-2 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                            Departments
                        </th>
                        <th scope="col" className="px-3 py-2 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                            Published On
                        </th>
                        <th scope="col" className="px-3 py-2 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                            Status
                        </th>
                        <th scope="col" className="px-3 py-2 text-left font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {notices.map((item) => {
                        const isChecked = selectedIds.includes(item._id);
                        return (
                            <tr key={item._id} className="hover:bg-gray-50 transition">
                                <td className="px-3 py-1.5 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            className="h-3.5 w-3.5 text-blue-600 rounded focus:ring-blue-500"
                                            checked={isChecked}
                                            onChange={(e) => handleRowCheckboxChange(item._id, e.target.checked)}
                                        />
                                        <p className="ml-1.5 font-medium text-gray-900 max-w-xs line-clamp-1 ">
                                            {item.title}
                                        </p>
                                    </div>
                                </td>
                                <td className="px-3 py-1.5 capitalize">
                                    {item.noticeType}
                                </td>
                                <td className="px-3 py-1.5 capitalize">
                                    {item.department}
                                </td>
                                <td className="px-3 py-1.5">
                                    {new Date(item.createdAt)
                                        .toLocaleDateString("en-GB", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric",
                                        })
                                        .replace(/ /g, "-")}
                                </td>
                                <td className="px-3 py-1.5">
                                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium capitalize ${getStatusColor(item.status)}`}>
                                        {item.status.toLowerCase() === 'published' && <BiCheck size={10} className="mr-0.5" />}
                                        {item.status.toLowerCase() === 'unpublished' && <BsFiletypeWoff size={10} className="mr-0.5" />}
                                        {item.status.toLowerCase() === 'draft' && <BiX size={10} className="mr-0.5" />}
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-3 py-1.5">
                                    <div className="flex items-center gap-1">
                                        <button className="p-1 text-gray-500 hover:text-gray-700 transition">
                                            <BsEye size={14} />
                                        </button>
                                        <button className="p-1 text-blue-600 hover:text-blue-800 transition">
                                            <FiEdit2 size={14} />
                                        </button>
                                        <button className="p-1 text-red-600 hover:text-red-800 transition">
                                            <BsTrash2 size={14} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            {selectedIds.length > 0 && (
                <div className="mt-1 text-xs text-gray-600 px-3">
                    {selectedIds.length} selected
                </div>
            )}
        </div>
    );
};

export default Noticetable;