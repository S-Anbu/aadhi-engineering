const dotenv = require("dotenv");
dotenv.config();
const { adminModel } = require("../Module/adminModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const otp = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Invalid email",
    });
  }

  try {
    const user = await adminModel.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid User",
      });
    }

    // Generate 6-digit OTP
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    user.otp = generatedOtp;
    await user.save();
    // Save OTP to DB or session if needed (e.g., )

    // Create transporter using your email service
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use another SMTP provider
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });
    const otpTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .container {
      width: 100%;
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .header {
      background-color: #fb8c00;
      color: #ffffff;
      text-align: center;
      padding: 20px;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 20px;
      text-align: center;
      color: #333333;
    }
    .content p {
      margin: 0 0 15px;
      font-size: 16px;
    }
    .otp {
      display: inline-block;
      margin: 20px 0;
      padding: 12px 24px;
      font-size: 20px;
      color: #fb8c00;
      background-color: #f9f9f9;
      border: 1px solid #fb8c00;
      border-radius: 5px;
      font-weight: bold;
    }
    .footer {
      padding: 10px;
      text-align: center;
      font-size: 14px;
      color: #777777;
      background-color: #f9f9f9;
    }
    .footer a {
      color: #007BFF;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Email Verification</h1>
    </div>
    <div class="content">
      <p>Hello,</p>
      <p>Use the following OTP to Reset Password:</p>
      <div class="otp">{verificationCode}</div>
      <p>This OTP is valid for 10 minutes. Please do not share it with anyone.</p>
        </div>
    <div class="footer">
      <p>&copy; 2025 Aadhi Engineering Works. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;
    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP Code: Aadhi Engineering Works",
      html: otpTemplate.replace("{verificationCode}", generatedOtp), // Replace with your OTP template
    };

    // Send mail
    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "OTP sent to email successfully",
    });
  } catch (error) {
    console.error("OTP Send Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while sending OTP",
    });
  }
};

const verifyotp = async (req, res) => {
  const { fullOtp } = req.body;

  if (!fullOtp || fullOtp.length !== 6) {
    return res.status(400).json({
      success: false,
      message: "Invalid OTP",
    });
  }

  try {
    const user = await adminModel.findOne({ otp: fullOtp });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    // Clear OTP after successful verification
    user.otp = null;
    const tokenPayload = {
      id: user._id,
      userId: user.userId,
    };
    const newToken = jwt.sign(tokenPayload, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    user.resettoken = newToken;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "OTP verified successfully",
      token: newToken,
    });
  } catch (error) {
    console.error("OTP Verification Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while verifying OTP",
    });
  }
};

const resetpassword = async (req, res) => {
  const token = req.cookies.yktr; 
  const { newPassword } = req.body;

  if (!token || !newPassword) {
    return res.status(400).json({
      success: false,
      message: "Token and new password are required",
    });
  }

  try {
    const once = await adminModel.findOne({ resettoken:token });
    if (!once) {
      return res.status(401).json({
        success: false,
        message: "Invalid or expired token",
      });
    }
    jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: "Invalid or expired token",
        });
      }
      const user = await adminModel.findOne({ _id: decoded.id });

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }
      
      user.password = newPassword
      user.resettoken = null; // Clear reset token after password reset
      user.otp = null; // Clear OTP after password reset
      await user.save();
    });

    return res.status(200).json({
      success: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    console.error("Reset Password Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while resetting password",
    });
  }
};

module.exports = {  otp, verifyotp, resetpassword };