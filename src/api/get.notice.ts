import { instance } from "./axiosInstance";

// export const fetchNotices = async (page = 1, limit = 10) => {
//   const res = await instance.get("/notice/get-all", {
//     params: { page, limit },
//   });
//   return res?.data;
// };


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

export const fetchAllNotices = async () => {
  const res = await instance.get("/notice/get-all");
  return res?.data;
};
