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

// Функция для получения постов с возможностью сортировки и фильтрации
const fetchPosts = async (sortBy, tag) => {
  // Создание объекта параметров запроса
  const params = {};

  if (sortBy) {
    params.sortBy = sortBy;
  }

  if (tag) {
    params.tag = tag;
  }

  try {
    const response = await axios.get("https://std.bit-camp.ru/blog/post", {
      params,
    });
    return response.data; // Возвращаем данные постов
  } catch (error) {
    console.error("Ошибка при получении постов:", error);
    throw error; // Пробрасываем ошибку дальше
  }
};

// Примеры использования функции
const getPosts = async () => {
  try {
    // Пример 1: Сортировка по дате
    const postsByDate = await fetchPosts("date");
    console.log("Посты, отсортированные по дате:", postsByDate);

    // Пример 2: Сортировка по количеству просмотров
    const postsByReads = await fetchPosts("reads");
    console.log(
      "Посты, отсортированные по количеству просмотров:",
      postsByReads
    );

    // Пример 3: Фильтрация по тегу "drama"
    const dramaPosts = await fetchPosts(null, "drama");
    console.log('Посты с тегом "drama":', dramaPosts);

    // Пример 4: Комбинированный запрос
    const actionPosts = await fetchPosts("reads", "action");
    console.log(
      'Посты с тегом "action", отсортированные по просмотрам:',
      actionPosts
    );
  } catch (error) {
    console.error("Ошибка при получении постов:", error);
  }
};

// Вызов функции для получения постов
getPosts();
