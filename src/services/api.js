import axios from "axios";

const api = axios.create({
  baseURL: "https://std.bit-camp.ru/blog",
});

export const getPost = async (id) => {
  try {
    const response = await api.get(`/post/${id}`);
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    throw error
  }
};
