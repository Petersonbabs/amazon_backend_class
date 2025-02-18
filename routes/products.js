const express = require("express")
const { addProduct, greetUser } = require("../controllers/product")
const {isLoggedIn, isAdmin} = require("../middlewares/isLoggedIn")
const userExists = require("../middlewares/userExist")
const router = express.Router()

router.route('/').post(addProduct)
router.route("/greet").get(isLoggedIn, isAdmin, greetUser)

module.exports = router