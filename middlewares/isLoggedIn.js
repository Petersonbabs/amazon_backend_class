
const user = {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    age: 25,
    isActive: true,
    address: {
        street: "123 Main St",
        city: "Los Angeles",
        state: "CA",
        zip: "90001",
        country: "USA"
    },
    hobbies: ["reading", "coding", "traveling"],
    createdAt: new Date().toISOString(),
    role: "admin",
    loggedIn: true
};



const isLoggedIn = (req, res, next)=>{
    console.log("you are in the logged in middleware")
    if(!user.loggedIn){
        res.status(403).json({
            status: "error",
            message: "You must be logged in."
        })
        return
    }
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