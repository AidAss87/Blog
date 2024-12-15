import ArrowButton from "../ui/ArrowButton/ArrowButton";
import axios from "axios";
import { useEffect, useState } from "react";
// Функция для получения постов с возможностью сортировки и фильтрации
const fetchPosts = async (sortBy, tag) => {
  const params = {};
  if (sortBy) params.sortBy = sortBy;
  if (tag) params.tag = tag;

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

export const ShortReads = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const postsByDate = await fetchPosts("date");
        setPosts(postsByDate); // Сохраняем полученные посты в состояние
      } catch (error) {
        console.error("Ошибка при получении постов:", error);
      }
    };

    getPosts(); // Вызов функции для получения постов
  }, []);

  return (
    <div className=" ml-[4.5rem] mt-[10px]">
      <div className="flex justify-between ">
        <h1 className="font-poppins font-semibold text-2xl ">Short Reads</h1>
        <div className="flex mr-[4.5rem]">
          <ArrowButton left={true} disable={false} />
          <ArrowButton />
        </div>
        <div className="absolute inset-x-0 top-[50px] h-[1px] bg-[#d6d6d6]"></div>
      </div>
      <div className="flex flex-wrap mt-[30px] mr-[4.5rem] gap-[57px]">
        {" "}
        {/* Используем gap для отступов между элементами */}
        {posts.length > 0 ? (
          posts.slice(0, 3).map((post) => (
            <div key={post.id} className="post-item w-[340px] h-[100px] flex">
              {" "}
              {/* Устанавливаем фиксированные размеры для постов и используем flex для внутреннего выравнивания */}
              {post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-[144px] h-[100px] mr-2" // Устанавливаем фиксированные размеры для изображения и отступ справа
                />
              )}
              <div className="flex flex-col justify-center">
                {" "}
                {/* Используем flex для вертикального выравнивания текста */}
                <h2 className="font-semibold font-poppins text-[17px]">
                  {post.title}
                </h2>
                <p className="font-poppins line-clamp-3 text-[12px] text-[#020202]">
                  {post.content}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>Загрузка постов...</p>
        )}
      </div>
    </div>
  );
};
