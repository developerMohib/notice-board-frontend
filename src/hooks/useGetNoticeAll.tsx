"use client";
import { fetchAllNotices, fetchNotices } from '@/api/get.notice';
import { useQuery } from '@tanstack/react-query';

// For paginated notices
export const useNotices = (page: number = 1, limit: number = 10) => {
  return useQuery({
    queryKey: ['notices', page, limit],
    queryFn: () => fetchNotices(page, limit),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};

// For ALL notices (use cautiously!)
export const useAllNotices = () => {
  return useQuery({
    queryKey: ['all-notices'],
    queryFn: fetchAllNotices,
    staleTime: 1000 * 60 * 2,
    retry: 1,
  });
};