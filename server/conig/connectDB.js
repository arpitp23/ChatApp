const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("Mongoose connected to DB");
        });
        connection.on("error", (err) => {
            console.error("Mongoose connection error:", err);
        });
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}

module.exports = connectDB;