const UserCollection = require("../models/user")

// GET ALL USERS
const getAllUsers = async (req, res)=>{
   
    try {
     const users = await UserCollection.find()
     if(!users){
        res.status(404).json({
            status:"error",
            message: "No user found"
        })
        return
     }
     res.status(200).json({
        status:"success",
        message:"users fetched",
        count: users.length,
        users
     })
    } catch (error) {
        console.log(error)
    }
}

// GET SINGLE USER
const getSingleUser = async(req, res) => {
    const {userId} = req.params
    try {
        const user = await UserCollection.findById(userId)
        if(!user){
            res.status(404).json({
                status:"error",
                message: "No user found"
            })
            return
         }
         res.status(200).json({
            status:"success",
            message:"user fetched",
            user
         })
    } catch (error) {
        console.error(error)
    }
}


// UPDATE SINGLE USER
const updateSingleUser  = async(req, res) => {
    const {userId} = req.params
    try {
        const user = await UserCollection.findByIdAndUpdate(userId, req.body)
        if(!user){
            res.status(404).json({
                status:"error",
                message: "user not updated. try again"
            })
            return
         }
         res.status(200).json({
            status:"success",
            message:"user updated",
            user
         })
    } catch (error) {
        console.error(error)
    }
}

// DELETE SINGLE USER
const deleteSingleUser = async(req, res) => {
    const {userId} = req.params
    try {
         await UserCollection.findByIdAndDelete(userId)
         
         res.status(200).json({
            status:"success",
            message:"user deleted",
         })
    } catch (error) {
        console.error(error)
    }
}

// UPDATE ALL USERS
const updateAllUser = async (req, res) => {
    try {
        const updated = await UserCollection.updateMany({}, {isVerified: true}) // filter // update // options
        res.status(200).json({
            updated
        })
    } catch (error) {
        console.log(error)
    }
}

// $or [{name:"bob"}, {description: "bob"}, {email:"bob"}, {userName:"bob"}, {gender: ""}]

const searchSortFilterUsers = async (req, res) => {
    const {minAge, maxAge, search} = req.query
    let query = {}
    if(search){
        query.$or = [
            {name: {$regex: search, $options:'i'}}, 
            {email:{$regex: search, $options:'i'}}, 
            {role:{$regex: search, $options:'i'}}
        ]
    }
    if(minAge){
        query.age = {$gte:parseInt(minAge)}
    }
    if(maxAge){
        query.age = {$lte:parseInt(maxAge)}
    }
    try {
        const result = await UserCollection.find(query)


        res.status(200).json({
            count: result.length,
            result
        })
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getAllUsers,
    getSingleUser,
    updateSingleUser,
    deleteSingleUser,
    updateAllUser,
    searchSortFilterUsers
}