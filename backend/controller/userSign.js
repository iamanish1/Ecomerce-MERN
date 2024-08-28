const bcrypt = require('bcryptjs');
const userModel = require("../models/usermodel");
const jwt = require('jsonwebtoken');

async function userSignin(req, res) {
    try {
        // Debugging: Log the raw request body
        console.log("Received raw request body:", req.body); 

        // Extracting email and password from the request body
        const { email } = req.body;
        const password = req.body.password || req.body.Password; 

        // Debugging: Log the extracted email and password
        console.log("Extracted email:", email);
        console.log("Extracted password:",password);

        // Check if email and password are provided
        if (!email) {
            throw new Error("Please provide an email");
        }
        if (!password) {
            throw new Error("Please provide a password");
        }

        // Find the user by email
        const user = await userModel.findOne({ email });

        if (!user) {
            throw new Error("User does not exist");
        }

        // Compare provided password with the stored hashed password
        const checkpassword = await bcrypt.compare(password, user.password);
        console.log("Password provided:", password);
        console.log("Stored hashed password:", user.password);
        console.log("Password match result:", checkpassword);

        // If the password matches
        if (checkpassword) {
            console.log("Login successful");

            const tokendata = {
                _id: user._id,
                email: user.email,
                password: user.password,
            };

            // Create a token
            const token = jwt.sign(tokendata, process.env.TOKEN_KEY, { expiresIn: '8h' });

            const tokenOption = {
                httpOnly: true,
                secure: true,
            };

            // Send token as cookie
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
        console.error("Error during signin:", error.message);

        res.json({
            message: error.message,
            error: true,
            success: false,
        });
    }
}

module.exports = userSignin;
