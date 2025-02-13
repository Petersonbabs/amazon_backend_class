// listen to Port & routes
const dotenv = require("dotenv")
dotenv.config()
const app = require("./app")
const PORT = process.env.PORT || 4000


app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
})


// connect to database
const connectToDb = require("./config/connectToDb")
connectToDb()
