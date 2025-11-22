async function logout(request, response){
    try {
        return response.cookie('token', token, cookieOptions).status(200).json({
            message: "Logout successful",
            success: true
        });
    } catch (error) {
        return response.status(500).json({
            message: "Server error",
            error: true
        });
    }
}

module.exports = logout;