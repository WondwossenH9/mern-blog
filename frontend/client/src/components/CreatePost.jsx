import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatePost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = { title, content };

        // Send new post to backend
        axios
            .post("http://localhost:5000/api/posts", newPost)
            .then((response) => {
                // Redirect to home page after successful creation
                navigate("/");
            })
            .catch((error) => console.error("Error creating post:", error));
    };

    return (
        <div>
            <h2>Create New Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Content</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
}

export default CreatePost;
