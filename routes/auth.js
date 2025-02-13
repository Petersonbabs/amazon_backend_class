const express = require("express")
const { signup, login } = require("../controllers/auth")
const router = express.Router()
// POST
// http://localhost:4000/api/v1/auth/signup
router.route("/signup").post(signup)
router.route("/login").post(login)

module.exports = router