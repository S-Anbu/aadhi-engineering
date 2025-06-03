const dotenv = require("dotenv");
dotenv.config();
const { adminModel, Imagemodel } = require("../Module/adminModel"); 
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { password, userId } = req.body;
  // console.log(userId, password);

  // Validate input
  if (!userId || !password) {
    return res.status(400).json({
      success: false,
      message: "UserId and password are required",
    });
  }

  try {
    // 1. Find user
    const user = await adminModel.findOne({ userId });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid User",
      });
    }

    // 2. Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: "Incorrect Password",
      });
    }

    // 3. Generate JWT token
    const tokenPayload = {
      id: user._id,
      userId: user.userId,
    };

    const newToken = jwt.sign(tokenPayload, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    // console.log("token:", newToken);

    // 4. Update user's online status & token
    user.isOnline = true;
    user.token = newToken;
    await user.save();

    // 5. Set HTTP-only cookie
    res.cookie("_wtll", newToken, {
      maxAge: 60 * 60 * 1000, // 1 hour
       secure: true,  
    });

    // 6. Send success response
    return res.status(200).json({
      success: true,
      message: "Login Successful",
      token: newToken,
        });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

const upload = async (req, res) => {
  try {
    const auth = req.user;
    if (!auth) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access",
      });
    }
    return res.status(200).json({
      success: true,
      message: "User is authenticated",
      
    });
  } catch (error) {}
};

// const urlUpload = async (req, res) => {
//   const { imageUrl } = req.body;

//   if (!imageUrl) return res.status(400).json({ message: "Image URL required" });

//   try {
//     let imageDoc = await Imagemodel.findOne();

//     if (!imageDoc) {
//       imageDoc = new Imagemodel({ urls: [imageUrl] });
//     } else {
//       imageDoc.urls.push(imageUrl);
//       imageDoc.updatedAt = Date.now();
//     }

//     await imageDoc.save();

//     res.status(201).json({ message: "Image URL saved successfully" });
//   } catch (err) {
//     console.error("Error saving:", err);
//     res
//       .status(500)
//       .json({ message: "Failed to save image URL", error: err.message });
//   }
// };

const urlUpload = async (req, res) => {
  const { imageUrl } = req.body;

  if (!imageUrl) {
    return res.status(400).json({ message: "Image URL required" });
  }

  try {
    // Extract version and filename from the URL
    const parts = imageUrl.split('/'); // Split the URL by "/"
    const version = parts[parts.length - 2]; 
    const filename = parts[parts.length - 1];

    const finalPath = `${version}/${filename}`; 

    let imageDoc = await Imagemodel.findOne();

    if (!imageDoc) {
      imageDoc = new Imagemodel({ urls: [finalPath] });
    } else {
      imageDoc.urls.push(finalPath);
      imageDoc.updatedAt = Date.now();
    }

    await imageDoc.save();

    res.status(201).json({ message: "Image path saved successfully", path: finalPath });
  } catch (err) {
    console.error("Error saving:", err);
    res.status(500).json({ message: "Failed to save image path", error: err.message });
  }
};


const dbimage = async (req, res) => {
  try {
    const images = await Imagemodel.findOne();
    if (!images) {
      return res.status(404).json({ message: "No images found" });
    }
    res.status(200).json(images.urls);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
module.exports = { login, upload, urlUpload ,dbimage};
