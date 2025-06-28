import axios from "axios";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
export default function Otp() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!/^\d*$/.test(value)) return; // Only digits

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }

    setError(""); // Clear error
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async () => {
    const fullOtp = otp.join("");

    if (fullOtp.length !== 6) {
      setError("Please enter the full 6-digit OTP");
      return;
    }
    console.log("Submitted OTP:", fullOtp);
    // TODO: Add actual verification logic
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/verifyotp`,
        { fullOtp },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log("OTP verification response:", res.data);
      if (res.data.success) {
        Cookies.set("yktr", res.data.token, {
          expires: 1, // days
          path: "/",
          sameSite: "Lax", // or 'None' if needed
          secure: true, // uncomment for HTTPS
        });
       
        setError(res.data);
        setTimeout(() => {
           navigate("/ResetPassword");
        }, 2000);
        return
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setError(
        error.response?.data.message || "An error occurred while verifying OTP"
      );
    }
  };

  return (
    <div className="h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-white p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center space-y-6 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800">Enter OTP</h2>
        <p className="text-gray-500 text-sm">
          We've sent a 6-digit code to your email/phone
        </p>

        <div className="flex justify-center space-x-2">
          {otp.map((digit, idx) => (
            <input
              key={idx}
              type="text"
              inputMode="numeric"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              ref={(el) => (inputRefs.current[idx] = el)}
              className="w-12 h-12 text-xl text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          ))}
        </div>

        {error && (
          <p
            className={`text-sm ${
              error.success === true
                ? "bg-green-100 border-green-300 text-green-800"
                : "bg-red-100 border-red-300 text-red-800"
            } rounded-lg p-2 border`}
          >
            {error.message || error}
          </p>
        )}
        <button
          onClick={handleSubmit}
          className="w-full py-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition duration-200 font-medium"
        >
          Verify OTP
        </button>
        <p className="text-sm text-gray-500">
          Didn't receive the code?{" "}
          <button
            onClick={() => navigate("/ForgetPassword")}
            className="text-blue-600 hover:underline"
          >
            Resend
          </button>
        </p>
      </div>
    </div>
  );
}
