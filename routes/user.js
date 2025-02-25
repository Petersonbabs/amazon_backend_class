const express = require("express")
const userExists = require("../middlewares/userExist")
const validUser = require("../middlewares/validUser")
const { deleteUser } = require("../controllers/product")
const { getAllUsers, getSingleUser, updateSingleUser, deleteSingleUser, updateAllUser, searchSortFilterUsers } = require("../controllers/users")
const router = express.Router()

router.route('/').get(getAllUsers).patch(updateAllUser)
router.route("/query").get(searchSortFilterUsers)
router.route("/:userId").get(getSingleUser).patch(updateSingleUser).delete(deleteSingleUser)

module.exports = router