// CRUD - create, read, update, delete
const UsersModel = require("../models/user")



const signup = async (req, res)=>{
    console.log(req.body);
    try {
        const user = await UsersModel.create(req.body)
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

const login = ()=>{
    console.log('login in...');
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