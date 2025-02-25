const Productmodel = require("../models/product")

// add product 
const addProduct = async (req, res) =>{
    try {
        const product = await Productmodel.create(req.body)
        if(!product){
            res.status(400).json({
                status: "error",
                message: "Failed to add product"
            })
            return
        }

        res.status(201).json({
            status: "success",
            message: "product added successufully",
            product
        })
    } catch (error) {
        console.error(error)
    }
}



module.exports ={
    addProduct
}