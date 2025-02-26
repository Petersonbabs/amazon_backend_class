// CRUD - create, read, update, delete
const UsersModel = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")



const signup = async (req, res)=>{
    const {password} = req.body
    try {
        const salt = await bcrypt.genSalt(12)
        const hashedPassword = await bcrypt.hash(password, salt)
        const user = await UsersModel.create({...req.body, password: hashedPassword})

        if(!user){
            res.status(400).json({
                status: "error",
                message: "Failed to signup"
            })
            return
        }


        res.status(201).json({
            status: "success",
            message: "Signup successuful",
            // user: userWithoutPassword
        })
    } catch (error) {
        console.error(error)
    }
}

const login = async (req, res)=>{
    const {email, password} = req.body
    console.log(req.body);
   
    try {
        // look for the user with this email
        const user = await UsersModel.findOne({email}).select("+password")
        if(!user){
            res.status(404).json({
                status: "error",
                message: "Email or password incorrect."
            })
            return
        }
        
        const passwordCorrect = await bcrypt.compare(password, user.password)
        if(!passwordCorrect){
            res.status(404).json({
                status: "error",
                message: "Email or password incorrect."
            })
            return
        }

        // generate token
        const token = jwt.sign({email: user.email, id: user._id}, process.env.jwt_secret_key, {expiresIn: process.env.jwt_exp})
        

        res.status(200).json({
            status: "success",
            message: "login successful",
            token
        })

    } catch (error) {
        console.log(error)
    }
}

const logout = ()=>{
    console.log('login out...');
}


module.exports = {
    signup,
    logout,
    login
}

// module.exports = login // default