import React from "react";

import { useState, useEffect } from "react";

const DashboardPage = () => {
    const [posts, setPosts] = useState([]);
    
    // replace with a real API call to fetch posts from social media account(s)
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then((response) => response.json())
    //     .then((data) => setPosts(data));
    // }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold">Welcome to the Dashboard</h1>
            <p className="mt-4 text-lg">
                Here you can manage your social media accounts and view analytics.
            </p>
            <p className="mt-2 text-lg">
                Get started by connecting your accounts!
            </p>
    
            <div className="mt-6">
                <button className="btn btn-primary mr-4">Connect Accounts</button>
                <button className="btn btn-secondary">View Analytics</button>
            </div>
            <footer className="mt-10">
                <p className="text-sm text-gray-500">
                    &copy; 2025 Social Media Dashboard. All rights reserved.
                </p>
            </footer>
        </main>
    );
}

export default DashboardPage;