const cloudinary = require("cloudinary").v2
const dotEnv = require("dotenv")
dotEnv.config()

cloudinary.config({
    api_key: process.env.cloudinary_apiKey,
    api_secret : process.env.cloudinary_apiSecret,
    cloud_name: process.env.cloudinary_name
})

module.exports = cloudinary