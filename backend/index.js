const express = require('express')
const cors = require('cors')
require('dotenv').config();  // <-- Add parentheses
const connectDB = require('./config/db')
const router = require("./routes/index")

const app = express()
app.use(cors())
app.use("/api",router)

const port = 3000 || process.env.PORT 

connectDB().then(()=>{
    app.listen(port,()=>{
        console.log("connected to db ")
        console.log("server is connected ")

    })
})
