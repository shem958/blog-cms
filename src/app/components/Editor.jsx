import React, { useState} from "react";

const Editor = ({onSave}) => {
    const [title, setTitle] = useState("");
    const [content, setContent ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(title, content);
        setTitle("");
        setContent("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post Title"
            className="border p-2 mb-2 w-full"
            required
            />
            <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Post Content"
            className="border p-2 mb-2 w-full"
            required
            />
            <button type="submit" className="bg-blue-500 text-white p-2">
                Save Post
            </button>
        </form>
    );
};
export default Editor;