"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Credential handling logic

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <section className="bg-white min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md p-8 bg-white border border-gray-200 shadow-xl rounded-lg transition-all duration-700 ease-out transform">
        {/* Heading */}
        <h1 className="text-center hover:scale-110 text-3xl font-extrabold text-gray-800 transition-all duration-500">
          Welcome Back 👋
        </h1>

        {/* Subtitle */}
        <p className="text-center text-gray-500 mt-2">
          Enter your credentials to access your account
        </p>

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="relative flex items-center mt-6">
            <span className="absolute left-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
            <input
              type="email"
              className="w-full py-3 pl-12 pr-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all duration-300"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative flex items-center mt-4">
            <span className="absolute left-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>
            <input
              type="password"
              className="w-full py-3 pl-12 pr-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all duration-300"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Sign In Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 text-white font-bold bg-blue-500 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
