const bcrypt = require('bcryptjs')
const userModel = require("../models/usermodel");

async function userSignin(req, res){
     
    try{
        
        const { email, password} = req.body;


        if (!email) {
            throw new Error("Please provide an email");
            
        }
        if (!password) {
            throw new Error("Please provide a password");
        }
        const user = await userModel.findOne({email})

        if(!user){
            throw new Error("User not exist")
        }
       
        const checkpassword = await  bcrypt.compare(password,user.password)
        console.log("checkPassword:",checkpassword)
    }
    catch(error){
       
        res.json({
            message: error.message,
            error: true,
            success: false
        });
    }

    } 

    module.exports = userSignin