const bcrypt = require('bcryptjs');
const userModel = require("../models/usermodel");
const jwt = require('jsonwebtoken');

async function userSignin(req, res) {
    try {
        const { email, password } = req.body;
        console.log("req body:", req.body);

        if (!email) {
            throw new Error("Please provide an email");
        }
        if (!password) {
            throw new Error("Please provide a password");
        }

        const user = await userModel.findOne({ email });

        if (!user) {
            throw new Error("User does not exist");
        }

        const checkpassword = await bcrypt.compare(password, user.password);
        console.log("Password:", password);
        console.log("hashPassword:", user.password);
        console.log("checkPassword:", checkpassword);

        if (checkpassword) {
            console.log("success");

            const tokendata = {
                _id: user._id,
                email: user.email,
            };

            const token = jwt.sign(tokendata, process.env.TOKEN_KEY, { expiresIn: '8h' });

            const tokenOption = {
                httpOnly: true,
                secure: true,
            };

            res.cookie("token", token, tokenOption).json({
                message: "Login successful",
                data: token,
                success: true,
                error: false,
            });
        } else {
            throw new Error("Incorrect password");
        }
    } catch (error) {
        console.error("Error during signin:", error);

        res.json({
            message: error.message,
            error: true,
            success: false,
        });
    }
}

module.exports = userSignin;
