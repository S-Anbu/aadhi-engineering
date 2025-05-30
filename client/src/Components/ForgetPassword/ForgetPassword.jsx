import { Mail } from "lucide-react";

const ForgetPassword = () => {
  return (
    <div className="flex items-center justify-center h-[80vh] md:h-[90vh] bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-2xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">Forgot Password</h2>
          <p className="text-sm text-gray-500">Enter your email to receive a reset OTP.</p>
        </div>
        <div className="space-y-5">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email"
              className="pl-10 w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition">
            Send OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;