'use client';

import React from "react";
import { useState, useEffect } from "react";


const WelcomePage = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <h1 className="text-4xl font-bold">Welcome to Social Media Dashboard</h1>
          <p className="mt-4 text-lg">
            Your one-stop solution for managing all your social media accounts.
          </p>
          <p className="mt-2 text-lg">
            Get started by signing up or logging in!
          </p>
    
          <div className="mt-6">
            <button className="btn btn-primary mr-4">Sign Up</button>
            <button className="btn btn-secondary">Log In</button>
          </div>
          <footer className="mt-10">
            <p className="text-sm text-gray-500">
              &copy; 2025 Social Media Dashboard. All rights reserved.
            </p>
          </footer>
        </main>
      );
}

export default WelcomePage;