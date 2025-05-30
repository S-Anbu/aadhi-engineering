const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.cookies._wtll;
  console.log("Token:",token);
  
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ message: "Invalid Token" });
  }
};

module.exports = authenticate;