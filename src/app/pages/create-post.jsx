import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Editor from '../components/Editor'
import { savePost } from '../utils/api'

const CreatePost = () => {
    const handleSave = async (post) => {
        await savePost(post);
        alert('Post saved!');
    };

    return (
        <div>
            <Navbar />
            <div className='container mx-auto p-4'>
                <h1 className='text-3xl font-bold mb-4'>
                 Create New Post
                </h1>
                <Editor onSave={handleSave} />
            </div>
            <Footer />
        </div>
    )
}

export default CreatePost