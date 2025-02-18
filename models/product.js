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
    }
})

const Productmodel = mongoose.model("products", productSchema)
module.exports = Productmodel