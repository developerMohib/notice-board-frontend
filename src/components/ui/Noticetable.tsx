import { BiCheck, BiX } from "react-icons/bi";
import { BsEye, BsFiletypeWoff, BsTrash2 } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";


const Noticetable = () => {
    const announcements = [
        {
            id: 1,
            title: 'Office closed on Friday for maintenance.',
            noticeType: 'General / Company-Wide',
            departments: 'All Department',
            publishedOn: '15-Jun-2025',
            status: 'Published'
        },
        {
            id: 2,
            title: 'Eid al-Fitr holiday schedule.',
            noticeType: 'Holiday & Event',
            departments: 'Finance',
            publishedOn: '15-Jun-2025',
            status: 'Published'
        },
        {
            id: 3,
            title: 'Updated code of conduct policy',
            noticeType: 'HR & Policy Update',
            departments: 'Sales Team',
            publishedOn: '15-Jun-2025',
            status: 'Published'
        },
        {
            id: 4,
            title: 'Payroll for October will be processed on 28th',
            noticeType: 'Finance & Payroll',
            departments: 'Web Team',
            publishedOn: '15-Jun-2025',
            status: 'Published'
        },
        {
            id: 5,
            title: 'System update scheduled for 30 Oct (9:00-11:00 PM)',
            noticeType: 'IT / System Maintenance',
            departments: 'Database Team',
            publishedOn: '15-Jun-2025',
            status: 'Published'
        },
        {
            id: 6,
            title: 'Design team sprint review moved to Tuesday.',
            noticeType: 'Department / Team',
            departments: 'Admin',
            publishedOn: '15-Jun-2025',
            status: 'Published'
        },
        {
            id: 7,
            title: 'Unauthorized absence recorded on 18 Oct 2025',
            noticeType: 'Warning / Disciplinary',
            departments: 'Individual',
            publishedOn: '15-Jun-2025',
            status: 'Unpublished'
        },
        {
            id: 8,
            title: 'Office closed today due to severe weather',
            noticeType: 'Emergency / Urgent',
            departments: 'HR',
            publishedOn: '15-Jun-2025',
            status: 'Draft'
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Published':
                return 'bg-green-100 text-green-800';
            case 'Unpublished':
                return 'bg-yellow-100 text-yellow-800';
            case 'Draft':
                return 'bg-gray-100 text-gray-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="rounded-lg border border-gray-200">
            <table className=" divide-y divide-gray-200">
                <thead className="bg-gray-50 px-4">
                    <tr>
                        {/* Make map here */}
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          <input type="checkbox" className="mr-2" />
                          Title
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Notice Type
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Departments/Individual
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Published On
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {announcements.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-50 transition">
                            <td className="px-6 py-4 whitespace-nowrap flex items-center">
                               <input type="checkbox" className="mr-2" />
                                <p className="text-sm font-medium text-gray-900">{item.title}</p>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <p className="text-sm text-gray-700">{item.noticeType}</p>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <p className="text-sm text-gray-700">{item.departments}</p>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <p className="text-sm text-gray-700">{item.publishedOn}</p>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                                    {item.status === 'Published' && <BiCheck size={12} className="mr-1" />}
                                    {item.status === 'Unpublished' && <BsFiletypeWoff size={12} className="mr-1" />}
                                    {item.status === 'Draft' && <BiX size={12} className="mr-1" />}
                                    {item.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <div className="flex items-center gap-2">
                                    {item.status === 'Published' && (
                                        <button className="p-1.5 text-gray-500 hover:text-gray-700 transition">
                                            <BsEye size={18} />
                                        </button>
                                    )}
                                    <button className="p-1.5 text-blue-600 hover:text-blue-800 transition">
                                        <FiEdit2 size={18} />
                                    </button>
                                    <button className="p-1.5 text-red-600 hover:text-red-800 transition">
                                        <BsTrash2 size={18} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Noticetable;