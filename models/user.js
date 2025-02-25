const mongoose = require("mongoose")

const userShema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required:true,
        unique: true
    },
    age: {
        type: Number,
        required:true
    },
    password: {
        type: String,
        required: true,
        min: 6,
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
    }
})

const userModel = mongoose.model("users", userShema)

// 
module.exports = userModel