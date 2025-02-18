// CRUD - create, read, update, delete
const UsersModel = require("../models/user")
const bcrypt = require("bcryptjs")



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
            user
        })
    } catch (error) {
        console.error(error)
    }
}

const login = async (req, res)=>{
    const {email, password} = req.body
   
    try {
        // look for the user with this email
        const user = await UsersModel.findOne({email})
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
        res.status(200).json({
            status: "success",
            message: "login successful"
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