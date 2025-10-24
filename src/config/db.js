import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectDB() {

    const uri = process.env.MONGO_URI;

    if (!uri) {
        console.log("URI is not defined");
        process.exit(1);
    }

    try {
        await mongoose.connect(uri);
        console.log("DB CONNECTED");
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
}

export default connectDB;
