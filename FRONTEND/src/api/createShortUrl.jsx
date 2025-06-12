import { axiosInstance } from "../utils/axiosInstance";

export const createShortUrl = async (url, slug = "") => {
  try {
    const response = await axiosInstance.post("/api/create", { url, slug });
    return response.data?.data;
  } catch (err) {
    console.error("❌ Axios Error Response:", err);

    const message =
      err.response?.data?.error ||
      err.response?.data?.message ||
      err.message ||
      "Something went wrong while creating the short URL.";

    throw new Error(message);
  }
};
