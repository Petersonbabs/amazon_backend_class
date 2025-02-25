const express = require("express")
const { addProduct} = require("../controllers/product")
// const {isLoggedIn, isAdmin} = require("../middlewares/isLoggedIn")
const userExists = require("../middlewares/userExist")
const router = express.Router()

router.route('/').post(addProduct)
// router.route("/greet").get(isLoggedIn, isAdmin, greetUser)

// title
// body
// tags

module.exports = router