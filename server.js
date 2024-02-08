const dotenv = require("dotenv");
const app = require("./app");
const mongoose = require("mongoose");
dotenv.config();

// Use the MongoDB connection string directly
const dbConnection = process.env.DB_CONNECTION;

console.log(dbConnection);

async function connectToDatabase() {
    try {
        await mongoose.connect(dbConnection);
        console.log("Database connected successfully!");
    } catch (error) {
        console.error("Connection failed:", error);
    }
}

connectToDatabase();

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
