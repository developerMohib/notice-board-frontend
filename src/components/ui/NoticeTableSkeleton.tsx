import React from 'react';

const NoticeTableSkeleton = () => {
    return (
        <div className="rounded-lg border border-gray-200 overflow-x-auto animate-pulse">
      <table className="min-w-full divide-y divide-gray-200 text-base p-4">
        <thead className="bg-gray-50">
          <tr>
            {["Title", "Notice Type", "Departments", "Published On", "Status", "Actions"].map((_, i) => (
              <th key={i} className="px-3 py-2">
                <div className="h-3 bg-gray-200 rounded w-24"></div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {[...Array(5)].map((_, rowIndex) => (
            <tr key={rowIndex}>
              {/* Title */}
              <td className="px-3 py-2">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-gray-200 rounded"></div>
                  <div className="h-3 bg-gray-200 rounded w-40"></div>
                </div>
              </td>

              {/* Notice Type */}
              <td className="px-3 py-2">
                <div className="h-3 bg-gray-200 rounded w-20"></div>
              </td>

              {/* Department */}
              <td className="px-3 py-2">
                <div className="h-3 bg-gray-200 rounded w-24"></div>
              </td>

              {/* Date */}
              <td className="px-3 py-2">
                <div className="h-3 bg-gray-200 rounded w-28"></div>
              </td>

              {/* Status */}
              <td className="px-3 py-2">
                <div className="h-5 bg-gray-200 rounded-full w-20"></div>
              </td>

              {/* Actions */}
              <td className="px-3 py-2">
                <div className="flex gap-2">
                  <div className="h-4 w-4 bg-gray-200 rounded"></div>
                  <div className="h-4 w-4 bg-gray-200 rounded"></div>
                  <div className="h-4 w-4 bg-gray-200 rounded"></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default NoticeTableSkeleton;