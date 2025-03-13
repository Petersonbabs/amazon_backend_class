const multer = require("multer")
const { CloudinaryStorage } = require("multer-storage-cloudinary")
const cloudinary = require("./cloudinary")

const storage = new CloudinaryStorage({
    cloudinary,
    params:{
        folder: "sqi-uploads",
        allowedFormats: ["jpeg", "jpg", "svg", "gif", "pdf", "mp4"]
    }
})

const upload = multer({storage})

module.exports = upload