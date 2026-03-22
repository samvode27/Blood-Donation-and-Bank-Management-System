const express = require('express')
const cors = require("cors")
const app = express()
const cookieParser = require('cookie-parser');

const adminRoute = require('./routes/admin')
const donorRoute = require('./routes/donor')
const hospitalRoute = require('./routes/hospital')
const bloodrequestRoute = require("./routes/bloodRequest")
const airoutes = require("./routes/ai")
const contactRoute = require("./routes/contact");
const newsletterRoutes = require("./routes/newsletter");
const campaignRoute = require("./routes/campaign"); 

app.use(cookieParser());

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = [
  process.env.CLIENT_URL || "https://blood-donation-and-bank-management.vercel.app",
  "http://localhost:3000"
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true); // allow curl, Postman
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      console.log("Blocked by CORS:", origin);
      return callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));

// Explicitly handle preflight requests
app.options("*", cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

const path = require('path');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/uploads/profile_pics', express.static(path.join(__dirname, 'uploads/profile_pics')));


//Routes
app.use('/api/v1/admin', adminRoute)
app.use('/api/v1/donors', donorRoute)
app.use('/api/v1/hospitals', hospitalRoute)
app.use("/api/v1/blood", bloodrequestRoute);

app.use('/api/v1/ai', airoutes);

app.use("/api/v1/contact", contactRoute);

app.use("/api/v1/newsletter", newsletterRoutes);

app.use('/api/v1/admin/newsletter', require('./routes/newsletter'));

app.use("/api/v1/admin/campaign", campaignRoute);

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

require('./jobs/sendReminders');


module.exports = app;






