const Productmodel = require("../models/product")
const sendEmail = require("../services/nodemailer/sendEmail")

// add product 
const addProduct = async (req, res) =>{
    const {_id, email, name} = req.user 
    try {
        const product = await Productmodel.create({...req.body, seller:_id})
        if(!product){
            res.status(400).json({
                status: "error",
                message: "Failed to add product"
            })
            return
        }

        sendEmail(email, name)

        res.status(201).json({
            status: "success",
            message: "product added successufully",
            product
        })
    } catch (error) {
        console.error(error)
    }
}

// GET SINGLE PRODUCT
const getAllProducts = async(req, res) => {
    try {
        const products= await Productmodel.find().populate("seller")
        if(!products){
            res.status(404).json({
                status:"error",
                message: "No product found"
            })
            return
         }
         res.status(200).json({
            status:"success",
            message:"products fetched",
            products
         })
    } catch (error) {
        console.error(error)
    }
}

// GET SINGLE PRODUCT
const getSingleProduct = async(req, res) => {
    const {productId} = req.params
    try {
        const product = await Productmodel.findById(productId).populate("seller")
        if(!product){
            res.status(404).json({
                status:"error",
                message: "No product found"
            })
            return
         }
         res.status(200).json({
            status:"success",
            message:"product fetched",
            product
         })
    } catch (error) {
        console.error(error)
    }
}



module.exports ={
    addProduct,
    getSingleProduct,
    getAllProducts
}