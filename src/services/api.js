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
    throw error;
  }
};

// Функция для получения постов с возможностью сортировки и фильтрации
export const fetchPosts = async (sortBy, tag) => {
  // Создание объекта параметров запроса
  const params = {};

  if (sortBy) {
    params.sortBy = sortBy;
  }

  if (tag) {
    params.tag = tag;
  }

  try {
    const response = await api.get("/post", {
      params,
    });
    return response.data; // Возвращаем данные постов
  } catch (error) {
    console.error("Ошибка при получении постов:", error);
    throw error; // Пробрасываем ошибку дальше
  }
};
