const express = require('express')
const cors = require('cors')
require('dotenv').config();  // <-- Add parentheses
const connectDB = require('./config/db')
const router = require("./routes/index")
const bodyparser=require("body-parser")
const cookieParser = require('cookie-parser')

const app = express()
app.use(cors())
app.use(express.json())
app.use("/api",router)
app.use(bodyparser.json());
app.use(cookieParser())



const port = 3000 || process.env.PORT 

connectDB().then(()=>{
    app.listen(port,()=>{
        console.log("connected to db ")
        console.log("server is connected ")

    })
})
