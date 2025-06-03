"use client";

import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!userId || !password) {
      setAlert("User ID and password are required");
      return;
    }
    try {
      const res = await axios.post(
        
        `${import.meta.env.VITE_BACKEND_URL}/api/login`,
        { userId, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
           withCredentials: true, 
        }
      );

      if (res.status === 200) {
        // setAlert("Logged in successfully");
        // console.log("Logged in successfully", res.data); // Log response data
        Cookies.set("_wtll", res.data.token, {
          expires: 7, // days
          path: "/",
          sameSite: "Lax", // or 'None' if needed
          secure: true  // uncomment for HTTPS
        });
        setUserId("");
        setPassword("");
        navigate("/ImageUploader");

        // Consider redirecting or storing auth token
      }
    } catch (error) {
      console.error("Login failed:", error, {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
      setAlert(error.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-[80vh] md:h-[90vh]  bg-gray-100">
      <div className="w-full max-w-md p-6 shadow-lg rounded-2xl bg-white">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">User ID</label>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Enter your user ID"
              className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
            Login
          </button>
        </form>
        {alert && <div className="text-red-600 p-2">*{alert}</div>}

        <div className="text-center mt-4">
          <Link to="/ForgetPassword" className="text-blue-500 hover:underline">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
