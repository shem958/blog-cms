import { useEffect, useState } from "react";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Editor from '../../components/Editor';
import { fetchPost, updatePost} from '../../utils/api';

const EditPost = ({ postId}) => {
    const [post, setPost] = useState(null);

    useEffect(() => { 
        const getPost = async () => {
            const data = await fetchPost(postId);
            setPost(data);
        }
        getPost();
    }, [postId]);

    const handleSave = async (updatedPost) => {
        await updatePost(postId, updatedPost);
        alert ('Post updated!');
    };

    if (!post) return <div>Loading...</div>

    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Edit Post</h1>
                <Editor onSave={handleSave} title={post.title} content={post.content} />
            </div>
            <Footer />
        </div>
    )
}
export default EditPost;