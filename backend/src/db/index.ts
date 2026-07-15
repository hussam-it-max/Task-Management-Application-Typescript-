import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();



const connectDB = async () => {
    const mongoURI  = process.env.MONGODB_URI;
    if(!mongoURI){
        throw new Error("MONGODB_URI is not defined in the environment variables");
    }
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected successfully");
  
};
export default connectDB;