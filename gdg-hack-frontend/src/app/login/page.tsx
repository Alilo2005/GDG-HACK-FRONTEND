"use client";
import { FormEvent, useState } from "react";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import api from "@/lib/axios"; // Ensure axios is installed
// import axios from "axios";
// 
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  // const [loginError, setLoginError] = useState("");
  const router = useRouter();
  console.log(process.env.NEXT_PUBLIC_BASE_URL);

  // const handleSubmit = async (e: FormEvent) => {
  //   e.preventDefault();

  //   // Validate password length
  //   // if (password.length < 8) {
  //   //   setPasswordError("Password must be at least 8 characters");
  //   //   return;
  //   // }
  //   setPasswordError("");
    
  //   try {
  //     // Send login request to the API
  //     console.log("email",email);
  //     // const email = "ad"
  //     const response = await api.post("/api/manager/login", {
  //       "email":"admin@test.com",
  //       "password":"password",
  //     },
      
      
  //   );
  //     const { token } = response.data;
  //     const { user } = response.data;
  //     localStorage.setItem("token", token);
  //     localStorage.setItem("user",user.id);
  //     router.push("/dashboard");
  //   } catch (error) {
  //     console.error("Login error:", error);
  //     setLoginError("Invalid email or password. Please try again.");
  //   }
  // };

  return (
    <div className="flex flex-col xl:flex-row items-center justify-center w-full min-h-screen p-6">
      {/* Left Section */}
      <div className="w-full xl:w-1/2 flex flex-col items-center justify-center text-center">
        <div className="text-4xl md:text-5xl font-bold">
          <p className="text-gdg_green">Welcome to </p>
          <h3 className="text-4xl font-bold">
            <span className="text-gdg_blue">G</span>
            <span className="text-gdg_green">Ski</span>
            <span className="text-gdg_red">ll</span>
            <span className="text-gdg_yellow">.</span>
          </h3>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full xl:w-1/2 bg-white flex flex-col justify-center items-center px-6 py-10 md:px-12 md:py-16 rounded-lg shadow-lg">
        <p className="text-lg text-gray-600 text-center mb-6">
          Please fill out the form below to continue
        </p>

        <form  className="w-full max-w-md flex flex-col">
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
          {/* {passwordError && <p className="text-red-500 text-sm text-center">{passwordError}</p>}
          {loginError && <p className="text-red-500 text-sm text-center">{loginError}</p>} */}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 my-6 font-bold text-white bg-gdg_blue hover:bg-blue-600 hover:scale-105 transition-all duration-300 rounded-lg shadow-lg"
          >
            Continue
            
          </button>
        </form>

        <div className=" mb-0 flex justify-center">
        <Image src="/gdg.svg" alt="gdg logo" 
          width={180}
          height={10}
          />
        </div>
        {/* Support Info */}
          
           
      </div>
    </div>
  );
}
