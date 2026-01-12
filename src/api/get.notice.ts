import { instance } from "./axiosInstance";

export const fetchNotices = async (page = 1, limit = 10) => {
  const res = await instance.get("/notice/get-all", {
    params: { page, limit },
  });
  return res?.data;
};

export const fetchAllNotices = async () => {
  const res = await instance.get("/notice/get-all");
  return res?.data;
};
