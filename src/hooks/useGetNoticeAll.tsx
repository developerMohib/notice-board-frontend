"use client";
import {  fetchNotices } from '@/api/get.notice';
import { useQuery } from '@tanstack/react-query';

export const useNotices = (
  page: number = 1,
  limit: number = 5,
  filters: { status?: string; department?: string; search?: string } = {}
) => {
  return useQuery({
    queryKey: ['notices', page, limit, filters],
    queryFn: () => fetchNotices(page, limit, filters),
    staleTime: 1000 * 60 * 2,
    retry: 1,
  });
};
