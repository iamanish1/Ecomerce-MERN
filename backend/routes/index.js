const express = require('express')
const router = express.Router()
const  userSignup = require("../controller/userSignup")
const userSignin = require('../controller/userSign')

router.post("/signup",userSignup)
router.post("/signin",userSignin)

module.exports= router 