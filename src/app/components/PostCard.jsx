const PostCard = ({post}) => {
    return (
        <div className="border p-4 mb-4">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>{post.content}</p>
            <p className="text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</p>
        </div>
    )
}

export default PostCard;