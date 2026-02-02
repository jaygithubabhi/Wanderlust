const cloudinary = require("cloudinary"); // 👈 NOT .v2
const CloudinaryStorage = require("multer-storage-cloudinary");

cloudinary.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary, // 👈 pass base object
    params: {
        folder: "wanderlust_DEV",
        allowed_formats: ["png", "jpg", "jpeg", "avif"], // snake_case ✅
    },
});

module.exports = { cloudinary, storage };
