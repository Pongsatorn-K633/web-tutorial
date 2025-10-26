import mongoose from "mongoose";

const connectDB = async () => {
    const url = process.env.CONNECTION_STRING
    try {
        await mongoose.connect(url);
        console.log("Database Connection Successfully!")
    } catch (err) {
        console.error("Database Connection Failed;", err)
    }
}

export default connectDB