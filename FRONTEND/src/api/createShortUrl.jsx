import { axiosInstance } from "../utils/axiosInstance";

export const createShortUrl = async (url, slug = "") => {
  try {
    const res = await axiosInstance.post("/api/create", { url, slug });
    return res.data.data;
  } catch (err) {
    console.log("❌ Axios Error Response:", err.response?.data); // ADD THIS

    const message =
      err.response?.data?.error ||
      err.response?.data?.message ||
      err.message ||
      "Something went wrong while creating the short URL.";

    throw new Error(message);
  }

};
