import Noticetable from "@/components/ui/Noticetable";
import {  BiPlus} from "react-icons/bi";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
import { BsPencil } from "react-icons/bs";
import Link from "next/link";

const page = () => {


    return (
        <>
            <div className="flex justify-between items-center my-3">
                <div>
                    <h1 className="text-lg font-semibold">Notice Management</h1>

                    <div className="flex items-center gap-3 mt-1 text-xs">
                        <span className="text-[#00A46E]">Active Notice 8</span>

                        {/* Divider */}
                        <span className="h-3 w-px bg-gray-400"></span>

                        <span className="text-[#F95524]">Draft Notice 9</span>
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

            <div className="">
                {/* Header with Filters */}
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

                {/* Table */}
                <Noticetable />

                {/* Table Footer (Pagination) - Optional */}
                <div className="mt-6 flex items-center justify-between">
                                        <div className="flex gap-2">
                        <button className="px-3 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                            <TiArrowLeft />
                        </button>
                        <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            1
                        </button>
                        <button className="px-3 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                            2
                        </button>
                        <button className="px-3 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                            <TiArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default page;