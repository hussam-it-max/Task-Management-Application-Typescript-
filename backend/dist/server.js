import app from "./app.js";
import dotenv from "dotenv";
import connectDb from "./db/index.js";
dotenv.config();
const port = process.env.PORT || 3000;
const startServer = async () => {
    try {
        await connectDb();
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
    catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};
startServer();
