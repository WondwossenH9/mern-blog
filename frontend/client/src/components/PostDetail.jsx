import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        // Fetch the specific post by ID
        axios
            .get(`http://localhost:5000/api/posts/${id}`)
            .then((response) => setPost(response.data))
            .catch((error) => console.error("Error fetching post:", error));
    }, [id]);

    if (!post) return <div>Loading...</div>;

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    );
}

export default PostDetail;
