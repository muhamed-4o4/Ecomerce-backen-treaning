const express = require("express")
const dotenv = require('dotenv').config()
const productRouter=require('./routes/product.route')
const globalError = require("./middlewares/globalError")


const app = express()
app.use(express.json())
app.use('/products',productRouter)
// انا هنا بح ط الميثود دي  لانها بتكون اخرحاجه حرفيا لو مش لاقيين حل يبقي خلاص السيرفر  يرد  
app.use(globalError)
module.exports = app

