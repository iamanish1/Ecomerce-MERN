const userModel = require("../models/usermodel");
const bcrypt = require('bcryptjs');

async function userSignup(req, res) {
    try {
        const { email, password, name } = req.body;

        const user = await userModel.findOne({email})

        if(user){
            throw new Error("user already exist")
        }
        
        if (!email) {
            throw new Error("Please provide an email");
            
        }
        if (!password) {
            throw new Error("Please provide a password");
        }
        if (!name) {
            throw new Error("Please provide a name");
        }

        const salt = bcrypt.genSaltSync(10);
        const hashpassword = await bcrypt.hash(password, salt);

        if (!hashpassword) {
            throw new Error("Something went wrong with hashing the password");
        }

        const paylod = {
            ...req.body,
            role : "GENERAL",
            password: hashpassword
        };
        console.log("data:", paylod);

        const userData = new userModel(paylod);
        const saveUser = await userData.save();

        res.status(201).json({
            data: saveUser,
            success: true,
            error: false,
            message: "User created successfully"
        });
    } catch (error) {
        res.json({
            message: error.message,
            error: true,
            success: false
        });
    }
}

module.exports = userSignup;
