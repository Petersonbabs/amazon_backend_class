const jwt = require("jsonwebtoken")
const UserCollection = require("../models/user")

const isLoggedIn = async (req, res, next)=>{
    let token;
    // check if user has a Bearer token
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1]
    }

    if(!token){
        res.status(403).json({
            status:"error",
            message: "Please provide token!"
        })
        return
    }

    // check if token is valid
    const decoded = jwt.verify(token, process.env.jwt_secret_key)
    const user = await UserCollection.findById(decoded.id)
    req.user = user

    // move to the next middleware
    next()
}

const isAdmin = (req, res, next)=>{
    if(user.role !== "admin"){
        res.status(403).json({
            status: "error",
            message: "You must be an admin."
        })
        return
    }
    console.log("you are in the admin in middleware")
    next()
}

module.exports = {isLoggedIn, isAdmin}