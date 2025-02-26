const express = require("express")
const { addProduct, getSingleProduct, getAllProducts} = require("../controllers/product")
const { isLoggedIn } = require("../middlewares/isLoggedIn")
const router = express.Router()

router.route('/').post(isLoggedIn, addProduct).get(getAllProducts)
router.route('/:productId').get(getSingleProduct)
// router.route("/greet").get(isLoggedIn, isAdmin, greetUser)

// title
// body
// tags

module.exports = router