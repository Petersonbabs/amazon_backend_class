const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(morgan("dev"))
// multipart/formdata
const AuthRoutes = require("./routes/auth")
const UsersRoutes = require("./routes/user")
const ProductsRoutes = require("./routes/products")
const errorHandler = require("./error/errorHandler")

// http://localhost:4000/api/v1/auth/login
app.use("/api/v1/auth", AuthRoutes)
app.use("/api/v1/users", UsersRoutes)
app.use("/api/v1/products", ProductsRoutes)

app.all("*", (req, res)=>{
    res.json(`${req.method} ${req.original} is not an endpoint on this server. Check your method & request url again.`)
})

app.use('*', errorHandler)
module.exports = app