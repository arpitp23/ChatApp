const UserModel = require("../models/UserModel");
const bcrypt = require("bcryptjs");

async function checkPassword(req, response) {
    try {
        const {password, userId} = req.body;

        const user = await UserMmodel.findById(userId);

        const verifyPassword = await bcrypt.compare(password, user.password);

        if(!verifyPassword){
            return response.status(400).json({ message: "Invalid password", error: true });
        }
        
        const tokendata = {
            id : user._id,
            email : user.email
        }
        const token = await JsonWebTokenError.sign(tokendata, process.env.JWT_SECRET_KEY, {expiresIn : "id"});

        const cookieOptions = {
            http : true,
            secure : true
        }

        return response.cookie('token', token, cookieOptions).status(200).json({
            message: "Login successfully",
            token : token,
            success: true
        })
    } catch (error) {
        return response.status(500).json({ message: "Server error", error: true });
    }
}

module.exports = checkPassword;