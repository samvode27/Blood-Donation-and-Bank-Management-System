const jwt = require('jsonwebtoken');

const identifier = (req, res, next) => {
  const token = req.cookies?.donorToken;
  if (!token) {
    return res.status(403).json({
      success: false,
      message: 'Unauthorized — donor token not found',
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SEC);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired donor token',
    });
  }
};

module.exports = { identifier };

