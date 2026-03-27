const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
dotenv.config();

const verifyToken = (req, res, next) => {
   const token = req.cookies.hospitalToken;  // Make sure this matches

   if (!token) {
      return res.status(401).json({ success: false, message: 'You are not authenticated.' });
   }

   try {
      const decoded = jwt.verify(token, process.env.JWT_SEC);
      req.user = decoded;
      next();
   } catch (err) {
      return res.status(403).json({ success: false, message: 'Invalid or expired token' });
   }
};

// Verify Admin token from cookie (could also be different cookie name)
const verifyAdminToken = (req, res, next) => {
  const token = req.cookies.adminToken; // Use separate cookie for admin token (recommended)
  console.log('adminToken cookie:', token);
  
  if (!token) {
    return res.status(401).json({ success: false, message: 'Admin not authenticated.' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SEC);
    req.user = decoded;  // attach admin info to req.admin
    next();
  } catch (err) {
    return res.status(403).json({ success: false, message: 'Invalid or expired admin token' });
  }
};


module.exports = {verifyToken, verifyAdminToken }






