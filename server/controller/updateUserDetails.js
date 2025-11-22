async function updateUserDetails(req, response) {
    try {
        const token = req.cookies.token || ""

        const user = await getUserDetailsFromToken(token);

        const {name, profile_pi} = req.body;

        const updateUser = await UserModel.updateOne(user._id, {name, profile_pi}, {new : true});

        const userInformation = await UserModel.findById(user._id);

        return response.json({
            message: "User details updated",
            data: userInformation,
            success: true
        });
    } catch (error)   {
        return response.status(500).json({ message: "Server error", error: true });
    }
}

module.exports = updateUserDetails;