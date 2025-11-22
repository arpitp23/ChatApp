async function userDetails(req, response) {
    try {
        const token = req.cookies.token || ""

        const user = await getUserDetailsFromToken(token);

        return response.status(200).json({
            message: "User details",
            data: user,
            success: true
        });

    } catch (error) {
        return response.status(500).json({ message: "Server error", error: true });
    }
}

module.exports = userDetails;