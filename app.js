const express = require("express")
const dotenv = require('dotenv').config()
const productRouter=require('./routes/product.route')

const app = express()
app.use('/products',productRouter)
module.exports = app

