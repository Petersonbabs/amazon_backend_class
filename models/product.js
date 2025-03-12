const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    name:{
        type: String
    },
    description: {
        type: String,
    },
    price: {
        type: String
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    image: {
        type: String,
        required: [true, "Image is required"]
    }
  
})

const Productmodel = mongoose.model("products", productSchema)
module.exports = Productmodel