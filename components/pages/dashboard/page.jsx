import React from "react";

import { useState, useEffect } from "react";

const DashboardPage = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => setPosts(data));
    }, []);
    
    return (
        <div className="dashboard-page">
        <h1>Dashboard</h1>
        <ul>
            {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
            ))}
        </ul>
        </div>
    );
}