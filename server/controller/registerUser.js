const UserModel = require("../models/UserModel");
const bcrypt = require("bcryptjs");
async function registerUser(req, response) {
    try {
        const {name, email, password, profile_pic} = req.body;

        const checkEmail = await UserModel.findOne({email});
        if(checkEmail) {
            return response.status(400).json({ message: "Email already exists", error: true });
        }

        const salt = await bcryptjs.genSalt(10);
        const hashpassword = await bcryptjs.hash(password, salt);

        const payload = { name, email, password : hashpassword, profile_pic };

        const UserSave = new UserModel(payload);
        await UserSave.save();

        return response.status(201).json({
            message : "User registered successfully",
            data : UserSave,
            success : true
        })

    } catch (error) {
        return response.status(500).json({ message: "Server error", error: true });
    }
}

module.exports = registerUser;