const express = require("express")
const mongoose = require("mongoose")

const app = express()

require('dotenv').config()

const port = process.env.PORT

const productCategoryRoute = require('./routes/product')

app.get("/", (req,res) => {
    res.send("API is running...")
})

app.use("/product/",productCategoryRoute)

// app.use("/api/product",productRoute)

app.listen(port, () => console.log(`Server started at port ${port}`))