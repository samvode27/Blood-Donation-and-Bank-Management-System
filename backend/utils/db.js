const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const DB = process.env.DB;

const dbConnection = async () => {
  try {
    await mongoose.connect(DB);
    console.log("Database Connected ✅");
  } catch (error) {
    console.log("DB Error:", error.message);
    setTimeout(dbConnection, 5000);
  }
};

module.exports = dbConnection;