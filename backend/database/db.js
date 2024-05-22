import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const DB_URI = process.env.DB

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(DB_URI);
        console.log("Connected to main database successfully");

        return { connection }
    } catch (error) {
        console.log("Something went wrong while connecting to DB.\n", error);
    }

}


export default connectDB;