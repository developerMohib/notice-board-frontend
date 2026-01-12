"use client";
import { useNotices } from "@/hooks/useGetNoticeAll";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
interface NoticePaginationProps {
  page: number;
  onPageChange: (page: number) => void;
  filters?: {
    employeeName?: string;
    department?: string;
    status?: string;
  };
}

const NoticePagination = ({ page, onPageChange }: NoticePaginationProps) => {
  const limit = 5;
  const { data, isLoading, refetch } = useNotices(page, limit);

  if (isLoading) return <p className="text-center py-4">Loading...</p>;

  const pagination = data?.pagination;
  if (!pagination || pagination.totalPages <= 1) return null;
  refetch();

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      <button
        onClick={() => onPageChange(Math.max(1, page - 1))}
        disabled={page === 1}
        className={`p-2 rounded border ${page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
          }`}
      >
        <TiArrowLeft />
      </button>

      <div className="flex gap-1">
        {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
            className={`w-9 h-9 flex items-center justify-center rounded text-sm font-medium ${page === pageNum
              ? 'bg-blue-600 text-white'
              : 'border border-gray-300 hover:bg-gray-50'
              }`}
          >
            {pageNum}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(Math.min(pagination.totalPages, page + 1))}
        disabled={page === pagination.totalPages}
        className={`p-2 rounded border ${page === pagination.totalPages
          ? 'opacity-50 cursor-not-allowed'
          : 'hover:bg-gray-100'
          }`}
      >
        <TiArrowRight />
      </button>
    </div>
  );
};

export default NoticePagination;