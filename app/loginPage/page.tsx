'use client';

import React, { FormEvent } from "react";
import NaviBar from "../../components/common/naviBar";


const LoginPage: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    //  05/9/2025 more form logic will be here, but that will be handled by the a context provider soon
    e.preventDefault();
    console.log("Login form submitted");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-3">
      <NaviBar />
      <h1 className="text-4xl font-bold text-center">Login to Your Account</h1>
      <p className="mt-4 text-lg text-center max-w-xl">
        Please enter your credentials to access your dashboard.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 w-full max-w-md space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
      <footer className="mt-10 text-sm text-gray-500 text-center">
        &copy; 2025 Social Media Dashboard. All rights reserved.
      </footer>
    </main>
  );
};

export default LoginPage;
