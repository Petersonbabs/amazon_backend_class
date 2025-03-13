const express = require("express")
const { addProduct, getSingleProduct, getAllProducts} = require("../controllers/product")
const { isLoggedIn } = require("../middlewares/isLoggedIn")
const router = express.Router()
const upload = require("../config/multer")

router.route('/').post(isLoggedIn, upload.single("image"), (addProduct, yeee)=>{yeee.send("ye ye ye ye")}).get(getAllProducts)
router.route('/:productId').get(getSingleProduct)
// router.route("/greet").get(isLoggedIn, isAdmin, greetUser)

// title
// body
// tags

module.exports = router