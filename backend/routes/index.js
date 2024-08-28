const express = require('express')
const router = express.Router()
const  userSignup = require("../controller/userSignup")
const userSignin = require('../controller/userSign')
const userLogout = require('../controller/userlogout')

router.post("/signup",userSignup)
router.post("/signin",userSignin)
router.get("/logout",userLogout)

module.exports= router 