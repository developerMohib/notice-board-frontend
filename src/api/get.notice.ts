import { instance } from "./axiosInstance";

export const fetchNotices = async (
  page = 1,
  limit = 5,
  filters: Record<string, string> = {}
) => {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    ...filters,
  });
  const res = await instance.get(`/notice/get-all?${params}`);
  return res.data;
};

export const oneNotice = async (id: string) => {
  const res = await instance.get(`/notice/get-single/${id}`);
  return res.data;
};
