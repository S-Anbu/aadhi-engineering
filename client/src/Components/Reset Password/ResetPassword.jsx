import React, { useState } from "react";
import axios from "axios";
import bcrypt from "bcryptjs";
import { Eye, EyeOff, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState(null);
const Navigate = useNavigate();
  const handleReset = async (e) => {
    e.preventDefault();

    if (!password || !confirm) {
      setAlert({ type: "error", msg: "Please fill in all fields." });
      return;
    }

    if (password !== confirm) {
      setAlert({ type: "error", msg: "Passwords do not match." });
      return;
    }

    try {
      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Send to backend
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/resetpassword`,
        {
          newPassword: hashedPassword,
        },
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        setAlert({ type: "success", msg: "Password reset successful!" });
        setTimeout(() => {
          Navigate("/login"); // Redirect to login after success
        }, 2000);
      } else {
        setAlert({
          type: "error",
          msg: res.data.message || "Something went wrong.",
        });
      }
    } catch (err) {
      console.error(err);
      setAlert({ type: "error", msg: err.response?.data?.message || "Server error." });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Reset Password
        </h2>

        {alert && (
          <div
            className={`text-sm text-center p-2 rounded ${
              alert.type === "error"
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {alert.msg}
          </div>
        )}

        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Lock size={18} />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter new password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 focus:outline-none"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Confirm new password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition duration-200"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
