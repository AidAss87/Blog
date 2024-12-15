import { useEffect } from "react";
import { useState } from "react";
import { getPost } from "../services/api";
import ArrowButton from "../components/ui/ArrowButton/ArrowButton";


export const Post = () => {
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const id = 2;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getPost(id);
        setPostData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <div className="container">
      <div
        className="relative h-[404px] bg-cover bg-center flex mt-[60px]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.6)),
        url(${postData.imageUrl})`,
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-white varela text-[70px] tracking-[11px]">
            ATTACK ON THE TITANS
          </h1>
          <div className="inset-0 bg-transparent flex items-center justify-center gap-8">
            <img src="images/post/star.svg" alt="star" />
            <p className="text-white text-[48px] font-semibold">
              {postData.stars}/5
            </p>
          </div>
          <p className="text-white text-[28px] mt-12">{postData.reads} reads</p>
        </div>
      </div>
      <h2 className="text-black varela text-[35px] mt-[97px] mb-[41px] tracking-[8px]">
        CHAPTER {postData.id}
      </h2>
      <p className="text-black text-[14px] tracking-[2px]">
        {postData.content}
      </p>
      <div className="flex items-center gap-8 justify-end mt-[42px]">
        <ArrowButton />
        <h2 className="text-black varela text-[35px] tracking-[8px]">
          CHAPTER {postData.id}
        </h2>
      </div>
    </div>
  );
};
