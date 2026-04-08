const app = require('./app');
const dotenv = require("dotenv");
const dbConnection = require('./utils/db');

dotenv.config();

const PORT = process.env.PORT || 8000;

// Connect DB first, then start server
const startServer = async () => {
  try {
    await dbConnection();

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("❌ Failed to start server:", error);
  }
};

startServer();