'use client';
import React from "react";

import { useState, useEffect } from "react";

const settingsPage = () => {
    return(
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold">Settings</h1>
            <p className="mt-4 text-lg">
                Adjust your preferences and settings here.
            </p>
            <form className="mt-6">
                <input type="text" placeholder="Username" className="input" required />
                <input type="email" placeholder="Email" className="input" required />
                <button type="submit" className="btn btn-primary mt-4">Save Changes</button>
            </form>
            <footer className="mt-10">
                <p className="text-sm text-gray-500">
                    &copy; 2025 Social Media Dashboard. All rights reserved.
                </p>
            </footer>
        </div>
    )
}

export default settingsPage;