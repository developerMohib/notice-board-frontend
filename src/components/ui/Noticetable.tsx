"use client";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useNotices } from "@/hooks/useGetNoticeAll";
import { BiCheck, BiX } from "react-icons/bi";
import { BsEye, BsFiletypeWoff } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { INotice } from "@/types/notice.types";
import { instance } from "@/api/axiosInstance";
import { showApiError } from "@/utils/errorpopup";
import Swal from "sweetalert2";
interface NoticeListProps {
  page: number;
  filters?: {
    employeeName?: string;
    department?: string;
    status?: string;
  };
}

const Noticetable = ({ page, filters }: NoticeListProps) => {
    const limit = 5;
    const { data, isLoading, refetch } = useNotices(page, limit, filters);
    console.log("Notices data:", data);
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const notices: INotice[] = data?.data || [];
    const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

    const handleRowCheckboxChange = (id: string, checked: boolean) => {
        if (checked) {
            setSelectedIds((prev) => [...prev, id]);
        } else {
            setSelectedIds((prev) => prev.filter((itemId) => itemId !== id));
        }
    };

    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedIds(notices.map((item) => item._id));
        } else {
            setSelectedIds([]);
        }
    };

    const isAllSelected = notices.length > 0 && selectedIds.length === notices.length;
    const isIndeterminate = selectedIds.length > 0 && selectedIds.length < notices.length;

    useEffect(() => {
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

    const toggleDropdown = (id: string) => {
        setOpenDropdownId(openDropdownId === id ? null : id);
    };

    const handleStatusToggle = async (item: INotice) => {
        try {
            const newStatus = item.status.toLowerCase() === 'published'
                ? 'unpublished'
                : 'published';

            const res = await instance.patch(`/notice/toggle-status/${item._id}`, { status: newStatus });

            if (res.status === 200) {
                Swal.fire({
                    position: 'top',
                    title: res.data.message,
                    showConfirmButton: false,
                    timer: 1500
                });
                refetch();
            }
        } catch (error) {
            showApiError(error);
        }
    };
    return (
        <div className="rounded-lg border border-gray-200 overflow-x-auto">





            <table className="min-w-full divide-y divide-gray-200 text-base p-4">
                <thead className="bg-gray-50">
                    <tr>
                        {/* Compact header cells */}
                        <th scope="col" className="px-3 py-2 text-left font-medium text-gray-500 tracking-wider whitespace-nowrap">
                            <input
                                type="checkbox"
                                className="h-3.5 w-3.5 text-blue-600 rounded focus:ring-blue-500"
                                checked={isAllSelected}
                                onChange={(e) => handleSelectAll(e.target.checked)}
                                ref={(el) => { if (el) el.indeterminate = isIndeterminate; }}
                            />
                            <span className="ml-1.5">Title</span>
                        </th>
                        <th scope="col" className="px-3 py-2 text-left font-medium text-gray-500 tracking-wider whitespace-nowrap">
                            Notice Type
                        </th>
                        <th scope="col" className="px-3 py-2 text-left font-medium text-gray-500 tracking-wider whitespace-nowrap">
                            Departments
                        </th>
                        <th scope="col" className="px-3 py-2 text-left font-medium text-gray-500 tracking-wider whitespace-nowrap">
                            Published On
                        </th>
                        <th scope="col" className="px-3 py-2 text-left font-medium text-gray-500 tracking-wider whitespace-nowrap">
                            Status
                        </th>
                        <th scope="col" className="px-3 py-2 text-left font-medium text-gray-500 tracking-wider whitespace-nowrap">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {notices?.map((item) => {
                        const isChecked = selectedIds.includes(item._id);
                        return (
                            <tr key={item._id} className="hover:bg-gray-50 transition">
                                <td className="px-3 py-1.5">
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            className="h-3.5 w-3.5 text-blue-600 rounded focus:ring-blue-500"
                                            checked={isChecked}
                                            onChange={(e) => handleRowCheckboxChange(item._id, e.target.checked)}
                                        />
                                        <p className="ml-1.5 font-medium text-gray-900 max-w-3xs wrap">
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
                                <td className="py-1.5">
                                    <div className="flex items-center gap-1">
                                        <button className="p-1 text-gray-500 hover:text-gray-700 transition">
                                            <BsEye size={14} />
                                        </button>
                                        <button className="p-1 text-blue-600 hover:text-blue-800 transition">
                                            <FiEdit2 size={14} />
                                        </button>
                                        <button
                                            onClick={() => toggleDropdown(item._id)}
                                            className="p-1 text-gray-500 hover:text-gray-700 transition relative"
                                        >
                                            <BsThreeDotsVertical size={16} />
                                        </button>
                                    </div>
                                </td>
                                <td className="py-1.5">
                                    <div className="flex items-center gap-2">
                                        {openDropdownId === item._id && (
                                            <div className="absolute right-12 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                                <div className="py-2">

                                                    {/* Status Toggle */}
                                                    <div className="px-4 py-2 flex items-center justify-between hover:bg-gray-50">
                                                        <span className="text-sm font-medium">{
                                                            item.status.charAt(0).toUpperCase() + item.status.slice(1)
                                                        }</span>
                                                        <label className="relative inline-flex items-center cursor-pointer">
                                                            <input
                                                                type="checkbox"
                                                                checked={item.status === 'published'}
                                                                onChange={() => handleStatusToggle(item)}
                                                                className="sr-only peer"
                                                            />
                                                            <div className="w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

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