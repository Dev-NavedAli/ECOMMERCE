import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const dbUrl  = process.env.MONGODB_URL

const connectDb = async()=>{
    await mongoose.connect(`${dbUrl}/e-commerce`)
}


export default connectDb