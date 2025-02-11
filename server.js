// import 
const express = require("express")
const cors = require("cors")
const getProducts = require("./product")

const app = express()
app.use(cors())

// http://localhost:4001/

// listen to a PORT for a request
app.listen(4001, ()=>{
    console.log('Server is running on port 4000')
})

// create, read, update, delete
app.get("/", getProducts)

// http://localhost:4000/products
app.get('/products', (req, res)=>{
    res.json({
       messaage: "prducts suscess"
    })
})

app.get("/users", (req, res)=>{
    res.send("All users")
})

app.post("/products", (req, res)=>{

})