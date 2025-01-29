import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch blog posts from backend
        axios
            .get("http://localhost:5000/api/posts")
            .then((response) => setPosts(response.data))
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    return (
        <div>
            <h2>Blog Posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post._id}>
                        <Link to={`/post/${post._id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
            <Link to="/create">Create New Post</Link>
        </div>
    );
}

export default Home;
