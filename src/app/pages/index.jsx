import { useEffect, useState } from "react";
import PostList from '../components/PostList';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { fetchPosts} from '../utils/api'; 

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        const getPosts = async () => {
            const data = await fetchPosts();
            setPosts(data)
        }
        getPosts();
    }, [])

    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
                <PostList posts={posts} />
            </div>
            <Footer />
        </div>
    )
}

export default Home
