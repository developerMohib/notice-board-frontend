"use client";
import { useAllNotices } from "@/hooks/useGetNoticeAll";
import { useState } from "react";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";

const NoticeList = () => {
  const [page, setPage] = useState(1);
  // const limit = 10;

  // const { data, isLoading } = useNotices(page, limit);
  const { data, isLoading } = useAllNotices();
  console.log(data);
  if (isLoading) return <p>Loading...</p>;

  const notices = data?.data;
  console.log('notices:', notices);
  const meta = data?.meta;

  return (
    <div>

      {/* Pagination */}
      <div className="flex gap-2 mt-4">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Prev
        </button>

        <span>
          Page {meta?.page} of {meta?.totalPages}
        </span>

        <button
          disabled={page === meta?.totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
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
  );
};

export default NoticeList;
