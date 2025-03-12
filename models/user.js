const mongoose = require("mongoose")

const userShema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required:true,
        unique: true
    },
    age: {
        type: Number,
        required: [true, "Age is required"],
        min: [18, "Age must be at least 18"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, 'Password must be a minimum of 6 characters'],
        max: 15,
        select: false
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: true
    },
    role: {
        type: String,
        enum: ["seller", "buyer"],
        default: "buyer"
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    profilePic: {
        type: String,
        required:[true, "Profile picture is required!"]
    }
})

const userModel = mongoose.model("users", userShema)

// 
module.exports = userModel