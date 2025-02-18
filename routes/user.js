const express = require("express")
const userExists = require("../middlewares/userExist")
const validUser = require("../middlewares/validUser")
const { deleteUser } = require("../controllers/product")
const router = express.Router()

router.route('/').delete(userExists, validUser, deleteUser )

module.exports = router