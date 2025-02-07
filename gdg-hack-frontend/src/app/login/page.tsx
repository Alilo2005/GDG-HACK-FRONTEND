"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import api from "../lib/axios"; // Ensure correct import

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      return;
    }
    setPasswordError("");

    try {
      const response = await api.post(
        "/api/auth/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      const { token, user } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", user.id);
      router.push("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      setLoginError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="flex flex-col xl:flex-row items-center justify-center w-full min-h-screen p-6">
      {/* Left Section */}
      <div className="w-full xl:w-1/2 flex flex-col items-center justify-center text-center space-y-8 p-8">
      <div className="text-4xl md:text-5xl font-bold pb-72">
        <p className="text-gdg_green">Welcome to </p>
        <h3 className="text-4xl font-bold">
          <span className="text-gdg_blue">G</span>
          <span className="text-gdg_green">Ski</span>
          <span className="text-gdg_red">ll</span>
          <span className="text-gdg_yellow">.</span>
        </h3>
        {/* <p className="text-blue-500"><span className="text-green-400 ">G</span>Skill!</p> */}
      </div>
        <img src="/gdg.svg" alt="gdg logo" className="w-15 h-6" />
      </div>

      {/* Right Section */}
      <div className="w-full xl:w-1/2 bg-white flex flex-col justify-center items-center px-6 py-10 md:px-12 md:py-16 rounded-lg shadow-lg">
        <p className="text-lg text-gray-600 text-center mb-6">
          Please fill out the form below to continue
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col">
          {/* Email Input */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-5 py-3 mb-4 border border-gray-300 rounded-lg shadow-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Password Input */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
            className="w-full px-5 py-3 mb-2 border border-gray-300 rounded-lg shadow-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Error Messages */}
          {passwordError && <p className="text-red-500 text-sm text-center">{passwordError}</p>}
          {loginError && <p className="text-red-500 text-sm text-center">{loginError}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-6 font-bold text-white bg-gdg_blue hover:bg-blue-600 hover:scale-105 transition-all duration-300 rounded-lg shadow-lg"
          >
            Continue
          </button>
        </form>

        {/* Support Info */}
        <div className="mt-6 text-center">
          <p className="text-gray-500">Or</p>
          <p className="text-lg text-gray-500">Support@company.dz</p>
        </div>
      </div>
    </div>
  );
}
