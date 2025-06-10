'use client';

import logIn from "../auth/login/logIn";
import React, { FormEvent } from "react";
import NaviBar from "../../components/common/naviBar";
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {

  // Using useRouter from next/navigation to handle redirection after login
  // This is a client-side component, so we can use hooks like useRouter

  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    logIn(e.target, () => router.push("/dashboard"));
    console.log("Logging in...");
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
          name="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded"
          required
        />

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>
        <p className="text-sm text-gray-500 text-center mt-2">
          Don&#39;t have an account? <a href="/register" className="text-blue-600 hover:underline">Register here</a>.
        </p>
      </form>
      <footer className="mt-10 text-sm text-gray-500 text-center">
        &copy; 2025 Social Media Dashboard. All rights reserved.
      </footer>
    </main>
  );
};

export default LoginPage;
