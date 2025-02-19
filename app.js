const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())

const AuthRoutes = require("./routes/auth")
const ProductsRoutes = require("./routes/products")

// http://localhost:4000/api/v1/auth/login
app.use("/api/v1/auth", AuthRoutes)
app.use("/api/v1/products", ProductsRoutes)

module.exports = app