'use client';

import Link from 'next/link';
import React from 'react';
import loginPage from './loginPage';
import signUpPage from './signUpPage';

const WelcomePage = () => {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-center">Welcome to Social Media Dashboard</h1>
      <p className="mt-4 text-lg text-center max-w-xl">
        Your one-stop solution for managing all your social media accounts.
      </p>
      <p className="mt-2 text-lg text-center">Get started by signing up or logging in!</p>

      <div className="mt-6 flex space-x-4">
        <Link href="/signupPage">
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Sign Up
          </button>
        </Link>

        <Link href="/loginPage">
          <button
            className="bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400"
          >
            Log In
          </button>
        </Link>
      </div>

      <footer className="mt-10 text-sm text-gray-500 text-center">
        &copy; 2025 Social Media Dashboard. All rights reserved.
      </footer>
    </main>
  );
};

export default WelcomePage;