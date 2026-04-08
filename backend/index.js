const app = require('./app');
const dotenv = require("dotenv");
const dbConnection = require('./utils/db');

dotenv.config();

// ✅ CONNECT DB FIRST
dbConnection();

// ✅ USE RENDER PORT
const PORT = process.env.PORT;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
