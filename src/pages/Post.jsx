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
    <div>Post</div>
  )
}

export default Post