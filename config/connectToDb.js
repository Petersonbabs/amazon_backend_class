const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()
const mongoUri = process.env.MONGO_URL

const connectToDb = async ()=>{
    try {
       const connnected = await mongoose.connect(mongoUri)
    if(connnected){
        console.log('Mongodb connected!');
       }else {
        throw new Error("Failed to connect!")
       }
   } catch (error) {
    console.error(error)
   }
}

module.exports = connectToDb