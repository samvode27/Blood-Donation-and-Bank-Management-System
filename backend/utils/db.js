const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected ✅");
  } catch (error) {
    console.error("DB Error:", error.message);
    process.exit(1); // ❗ Stop app if DB fails
  }
};

module.exports = dbConnection;