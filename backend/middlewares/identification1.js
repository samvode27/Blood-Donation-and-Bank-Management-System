const jwt = require('jsonwebtoken');

const identifier1 = (req, res, next) => {
  const token = req.cookies?.hospitalToken;

  if (!token) {
    return res.status(403).json({
      success: false,
      message: 'Unauthorized — hospital token not found',
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SEC);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired hospital token',
    });
  }
};

module.exports = { identifier1 };

