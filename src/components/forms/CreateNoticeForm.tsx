'use client';
import Link from "next/link";
import { useState } from "react";
import { BiCalendar, BiChevronDown, BiChevronDownCircle, BiChevronDownSquare, BiUpload, BiUser } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";

const CreateNoticeForm = () => {
    const [formData, setFormData] = useState({
        targetType: 'individual',
        noticeTitle: '',
        employeeId: '',
        employeeName: '',
        position: '',
        noticeType: '',
        publishDate: '',
        noticeBody: '',
        attachments: [] as File[]
    });

    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [dragOver, setDragOver] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            if (file.type === 'application/pdf' || file.type.startsWith('image/')) {
                setUploadedFile(file);
            } else {
                alert('Please upload only PDF or image files (JPG, PNG)');
            }
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragOver(false);

        const files = e.dataTransfer.files;
        if (files && files.length > 0) {
            const file = files[0];
            if (file.type === 'application/pdf' || file.type.startsWith('image/')) {
                setUploadedFile(file);
            } else {
                alert('Please upload only PDF or image files (JPG, PNG)');
            }
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragOver(true);
    };

    const handleDragLeave = () => {
        setDragOver(false);
    };

    const removeFile = () => {
        setUploadedFile(null);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    return (
        <div>
            <Link
                href="/notice-board"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#F95524] mb-3"
            >
                <IoIosArrowBack className="text-base border border-gray-400" />
                <span>Create a notice</span>
            </Link>
            <div >

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Main Form Card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
                        {/* Target Type */}
                        <div className="mb-8">
                            <label className="block text-sm font-semibold text-gray-900 mb-3">
                                Target Department(s) or individual
                            </label>
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
                        </div>

                        {/* Notice Title */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-gray-900 mb-3">
                                Notice Title <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="noticeTitle"
                                value={formData.noticeTitle}
                                onChange={handleInputChange}
                                placeholder="Write the Title of Notice"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition placeholder:text-gray-400"
                                required
                            />
                        </div>

                        {/* Employee Details Section */}
                        {formData.targetType === 'individual' && (
                            <div className="space-y-6 mb-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {/* Employee ID */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-3">
                                            Select Employee ID <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <select
                                                name="employeeId"
                                                value={formData.employeeId}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition appearance-none"
                                                required
                                            >
                                                <option value="">Select employee designation</option>
                                                <option value="EMP001">EMP001 - Manager</option>
                                                <option value="EMP002">EMP002 - Developer</option>
                                                <option value="EMP003">EMP003 - Designer</option>
                                                <option value="EMP004">EMP004 - HR Executive</option>
                                            </select>
                                            <BiChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                                        </div>
                                    </div>

                                    {/* Employee Name */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-3">
                                            Employee Name <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <BiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                            <input
                                                type="text"
                                                name="employeeName"
                                                value={formData.employeeName}
                                                onChange={handleInputChange}
                                                placeholder="Enter employee full name"
                                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition placeholder:text-gray-400"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Position */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-3">
                                            Position <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <select
                                                name="position"
                                                value={formData.position}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition appearance-none"
                                                required
                                            >
                                                <option value="">Select employee department</option>
                                                <option value="manager">Manager</option>
                                                <option value="developer">Developer</option>
                                                <option value="designer">Designer</option>
                                                <option value="hr">HR Executive</option>
                                                <option value="finance">Finance</option>
                                                <option value="sales">Sales</option>
                                            </select>
                                            <BiChevronDownCircle className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                                        </div>

                                    </div>
                                </div>


                            </div>
                        )}

                        {/* Notice Type and Publish Date */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            {/* Notice Type */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-3">
                                    Notice Type <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        name="noticeType"
                                        value={formData.noticeType}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition appearance-none"
                                        required
                                    >
                                        <option value="">Select Notice Type</option>
                                        <option value="general">General / Company-Wide</option>
                                        <option value="holiday">Holiday & Event</option>
                                        <option value="hr">HR & Policy Update</option>
                                        <option value="finance">Finance & Payroll</option>
                                        <option value="it">IT / System Maintenance</option>
                                        <option value="department">Department / Team</option>
                                        <option value="warning">Warning / Disciplinary</option>
                                        <option value="emergency">Emergency / Urgent</option>
                                    </select>
                                    <BiChevronDownSquare className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                                </div>
                            </div>

                            {/* Publish Date */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-3">
                                    Publish Date <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <BiCalendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="date"
                                        name="publishDate"
                                        value={formData.publishDate}
                                        onChange={handleInputChange}
                                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Notice Body */}
                        <div className="mb-8">
                            <label className="block text-sm font-semibold text-gray-900 mb-3">
                                Notice Body <span className="text-red-500">*</span>
                            </label>
                            <div className="border border-gray-300 rounded-lg overflow-hidden">


                                <textarea
                                    name="noticeBody"
                                    value={formData.noticeBody}
                                    onChange={handleInputChange}
                                    placeholder="Write the details about notice"
                                    className="w-full px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                                    required
                                />
                            </div>
                        </div>

                        {/* Upload Attachments Card */}
                        <div
                            className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${dragOver
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'}`}
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                        >
                            <BiUpload className="mx-auto text-gray-400 mb-4" size={48} />
                            <p className="text-gray-600 mb-2">


                            </p>
                            <p className="text-gray-600 mb-6">
                                <label className="text-blue-600 hover:text-blue-800 cursor-pointer font-medium">
                                    upload {" "}
                                    <input
                                        type="file"
                                        onChange={handleFileUpload}
                                        accept=".jpg,.jpeg,.png,.pdf"
                                        className="hidden"
                                    />

                                </label>
                                nominee profile image or drag and drop.
                                <br />
                                <span className="text-sm text-gray-500">Accepted File Type: jpg, png, pdf</span>
                            </p>
                        </div>
                    </div>

                    {/* Uploaded File Preview */}
                    <div>
                        {uploadedFile && (
                            <div className="mt-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="p-2 bg-blue-100 rounded-lg mr-3">
                                            <FiFileText className="text-blue-600" size={24} />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">{uploadedFile.name}</p>
                                            <p className="text-sm text-gray-500">
                                                {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={removeFile}
                                        className="p-1 hover:bg-gray-200 rounded-full transition"
                                    >
                                        <BsTwitter size={20} className="text-gray-500" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>


                    {/* Form Actions */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <button
                            type="button"
                            className="px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium"
                        >
                            Save as Draft
                        </button>
                        <div className="flex items-center gap-4">
                            <button
                                type="button"
                                className="px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                            >
                                Publish Notice
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateNoticeForm;
