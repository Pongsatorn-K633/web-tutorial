import mongoose, { mongo } from "mongoose"

const databaseConnect = async () => {
    const url = process.env.CONNECTION_STRING
    try{
        await mongoose.connect(url);
        console.log("Database connected successfully")
    } catch (err) {
        console.error("Database connection failed", err)
    }
}

export default databaseConnect