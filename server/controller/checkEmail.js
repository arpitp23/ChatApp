async function checkEmail(req, response) {
    try {
        const { email} = req.body;

        const checkEmail = await UserModel.findOne({email});
        if(checkEmail){
            return response.status(400).json({ message: " user not exit ", error: true });
        }
        return response.status(200).json({
            message: "User verified",
            data: checkEmail,
            success: true
        });
    } catch (error) {
        return response.status(500).json({ message: "Server error", error: true });
    }
}

module.exports = checkEmail;