// const multer = require("multer");
// const path = require("path");

// const createUploader = (folder) => {
//   const storage = multer.diskStorage({
//     destination: (req, file, cb) => cb(null, `uploads/${folder}`),
//     filename: (req, file, cb) => {
//       cb(null, Date.now() + '-' + Math.round(Math.random() * 1e9) + path.extname(file.originalname));
//     }
//   });

//   // Optional: Add file filter (images only)
//   const fileFilter = (req, file, cb) => {
//     const allowedTypes = /jpeg|jpg|png|gif/;
//     const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
//     const mimetype = allowedTypes.test(file.mimetype);
//     if (extname && mimetype) {
//       cb(null, true);
//     } else {
//       cb(new Error('Only image files are allowed'));
//     }
//   };

//   return multer({
//     storage,
//     fileFilter,
//     limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB max file size
//   });
// };

// module.exports = createUploader;


// middlewares/upload.js

const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

// ✅ THIS is the function your route expects
const createUploader = (folderName) => {
  const storage = new CloudinaryStorage({
    cloudinary,
    params: {
      folder: folderName,
      allowed_formats: ["jpg", "jpeg", "png"],
    },
  });

  return multer({ storage });
};

module.exports = createUploader;

