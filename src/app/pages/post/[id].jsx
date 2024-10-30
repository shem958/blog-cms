import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { fetchPost } from "../../utils/api";

const Post = ({ postId }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      const data = await fetchPost(postId);
      setPost(data);
    };
    getPost();
  }, [postId]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p>{post.content}</p>
        <p className="text-gray-500">
          {new Date(post.createdAt).toLocaleDateString()}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Post;
