const app = require('./app');
const dotenv = require("dotenv");
const dbConnection = require('./utils/db');

dotenv.config();

dbConnection();

// ✅ FORCE fallback to 10000 (important for Render)
const PORT = process.env.PORT || 10000;

console.log("PORT DEBUG:", PORT);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
