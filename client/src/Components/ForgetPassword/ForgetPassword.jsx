import axios from "axios";
import { Mail } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState("");
    const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleReset = async () => {
    if (!email) {
      setAlert("Please enter your email address.");
      return;
    }
    setLoading(true)
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/otp`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log("OTP response:", response.data);
      
      setAlert(response.data );
      setEmail("");
      setTimeout(() => {
        return navigate("/otp");
      }, 2000);
    } catch (error) {
      setAlert(
        error?.response?.data?.message ||
          "An error occurred while sending the OTP. Please try again."
      );
      console.error("Error sending OTP:", error);
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className="flex items-center justify-center h-[80vh] md:h-[90vh] bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-2xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">
            Forgot Password
          </h2>
          <p className="text-sm text-gray-500">
            Enter your email to receive a reset OTP.
          </p>
        </div>
        <div className="space-y-5">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => {setEmail(e.target.value.trim()); setAlert("")} }
              required
              className="pl-10 w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleReset}
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
              "Send OTP"
            )}
          </button>
          {alert && (
            <div
              className={`text-sm font-semibold text-center p-2 rounded border ${
                alert.success === true
                  ? "bg-green-100 border-green-300 text-green-800"
                  : "bg-red-100 border-red-300 text-red-800"
              }`}
            >
              {alert.message||alert}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
