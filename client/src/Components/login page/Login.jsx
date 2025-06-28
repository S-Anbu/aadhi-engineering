"use client";

import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!userId || !password) {
      setAlert("User ID and password are required");
      return;
    }
    setLoading(true); // Start loader
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
        setAlert(res.data);
        Cookies.set("_wtll", res.data.token, {
          expires: 7, // days
          path: "/",
          sameSite: "Lax", // or 'None' if needed
          secure: true, // uncomment for HTTPS
        });
        setUserId("");
        setPassword("");
        setTimeout(() => {
          navigate("/ImageUploader");
        }, 1500);
        return;
      }
    } catch (error) {
      setAlert(error.response?.data?.message || "Login failed");
      console.error("Login failed:", error, {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
    } finally {
      setLoading(false); // Stop loader
    }
  };

  return (
    <div className="flex items-center justify-center h-[80vh] md:h-[90vh]  bg-gray-100">
      <div className="w-full max-w-md p-6 shadow-lg rounded-2xl bg-white">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Admin Login
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
          <button
            type="submit"
            disabled={loading}
            className="w-full  py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition flex items-center justify-center"
          >
            {loading ? (
              <div className="flex space-x-1  p-2 justify-center items-center">
                <div className="h-2 w-2 bg-white rounded-full animate-bounce"></div>
                <div className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:0.1s]"></div>
                <div className="h-2 w-2 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></div>
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>
        {alert && (
          <p
            className={`text-sm ${
              alert.success === true
                ? "bg-green-100 border-green-300 text-green-800"
                : "bg-red-100 border-red-300 text-red-800"
            } rounded-lg m-4 text-center p-2 border`}
          >
            {alert.message || alert}
          </p>
        )}

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
