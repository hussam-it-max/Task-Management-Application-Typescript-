import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();
import connectDb from "./db/index.js";
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
