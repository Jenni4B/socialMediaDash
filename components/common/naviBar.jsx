'use client';

import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const NaviBar = () => {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if the user is logged in (this is just a placeholder, implement your own logic)
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        // Implement your logout logic here
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        router.push("/loginPage"); // Redirect to login page after logout
    };

    return (
        <nav className="flex justify-between items-center p-1 bg-gray-800 text-white">

            <div className="text-xl font-bold">
                <Link href="/welcomePage">Social Media Dashboard</Link>
            </div>

            <div className="flex space-x-10">
                {isLoggedIn ? (
                    <button onClick={handleLogout} className="btn btn-secondary">Logout</button>
                ) : (
                    <button onClick={() => router.push("/loginPage")} className="btn btn-primary">Login</button>
                )}
            </div>
        </nav>
    );
}

export default NaviBar;